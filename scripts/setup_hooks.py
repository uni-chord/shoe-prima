# scripts/setup_hooks.py
# repository를 clone하거나 git hook이 업데이트 되었을 때 실행

import os
import shutil
import sys

def main():
    git_dir = '../.git'
    # .git/hooks 폴더의 경로
    hooks_dir = os.path.join(git_dir, 'hooks')
    # githooks 폴더의 경로
    githooks_dir = '../githooks'

    if not os.path.exists(git_dir):
        raise FileNotFoundError("No directory '.git/' found")
        return 
    
    # .git/hooks가 존재하지 않는 경우에만 생성
    os.makedirs(hooks_dir, exist_ok=True)

    # githooks 폴더 내 파일을 .git/hooks로 복사
    for filename in os.listdir(githooks_dir):
        src = os.path.join(githooks_dir, filename)
        dst = os.path.join(hooks_dir, filename)
        shutil.copyfile(src, dst)

    # 윈도우가 아닌 리눅스 환경에서는 실행 권한 지정
    if sys.platform != 'win32':
        for filename in os.listdir(hooks_dir):
            filepath = os.path.join(hooks_dir, filename)
            # 파일 기존 권한 체크
            mode = os.stat(filepath).st_mode
            # 읽기-쓰기-실행에 대해서 모두 가능하게 권한 추가
            os.chmod(filepath, mode | 0o111)

if __name__ == "__main__":
    main()