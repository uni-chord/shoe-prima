#!/bin/bash

# It is a shell script for creating a branch from the git flow.
# Especially, it would be helpful for a small team with JIRA.
# git flow에 맞게 브랜치를 생성하는 셸 스크립트입니다.
# 특히, JIRA를 이용하는 작은 팀들에 유용합니다.

# Write 'bash flow.sh' and take procedures followed
# 명령어 'bash flow.sh'를 입력하고 이어지는 과정을 따르세요

# created: 24-06-12
# updated: 24-06-12
# @glenn-syj

# current_branch: fetch the current branch name
# current_branch: 현재 브랜치 이름을 가져오기
current_branch=$(git rev-parse --abbrev-ref HEAD)

# switch to develop and pull origin develop
# develop 브랜치로 바꾸고 pull 받아오기
if [[ $current_branch != "develop" ]]; then
    echo "It should be done within the develop branch. Now changing ..."
    git checkout develop
fi

echo "Pulling origin develop ..."
git pull origin develop

# result: a variable where the branch name would be saved
# result: 브랜치 명이 저장될 변수
result=""

# branch_types: an array where the branch types are stored
# branch_types: 브랜치 타입을 저장하는 배열
branch_types=( "feature" "bugfix" "release" "hotfix" )

# team_types: an array where the team types are stored
# branch_types: 브랜치 타입을 저장하는 배열
team_types=( "" "back" "front" )

# jira_prefix: jira prefix without any issue number
# jira_prefix: 이슈 넘버를 제외한 지라 구분자
jira_prefix="SPR"

# trim(): a function for trimming the whole input string
# trim(): 모든 문자열에 대해서 좌우 공백 제거를 위한 함수
trim() {
    local var="$@"
    var=$(echo "$var" | xargs)
    echo "$var"
}


# step 1: get and check the branch type input
# 1단계: branch type 받아오고 검증하기
while true; do

    # branch_idx: where the input value is stored
    # branch_idx 변수에 입력값 저장
    echo "[1] feature [2] bugfix [3] release [4] hotfix"
    read -p "enter your branch type [default = 1]: " branch_idx

    # trim the blanks from the left-most and the right-most side
    # 좌우 공백 제거
    branch_idx=$(trim $branch_idx)
    echo "branch_idx: $branch_idx"
    # when an enter or a space is put, the branch is set to feature
    # 공백 입력시 type을 가장 자주 쓰는 feature로 설정
    if [ -z "$branch_idx" ]; then 
        branch_idx=1
    fi

    # input validation: join the branch tpye after passing only 1, 2, 3 and 4
    # 입력값 검증: 1, 2, 3, 4만 통과 후 문자열 추가
    if [[ "$branch_idx" =~ ^[1234]$ ]]; then
        branch_idx=$((branch_idx - 1))
        branch_type=${branch_types[$branch_idx]}
        result="$branch_type"
        break;
    else
        echo "Invalid branch type."
    fi
done



# step 2: create a proper branch name bsaed on its type
# 2단계: 각 branch type에 맞는 브랜치 이름 생성

# mid_step: a variable for saving the checkpoint when the input is invalid in [1] feature or [2] bugfix
# 0: team input, 1: JIRA issue input, 2: brief description input
# mid_step: feature 혹은 bugfix 브랜치에서 입력값 이상 시 되돌아올 지점 구분을 위한 변수
# 0: 팀 입력, 1: JIRA 이슈 입력, 2: 간단한 브랜치 요약 입력
mid_step=0

# case [1] feature [2] bugfix: {branch_type}/{team_type}/{jira_prefix}-{issue_num}-{brief_desc}
while [ $branch_idx -le 1 ]; do 

    # a step for getting the input of the team. 
    # If any team variable is not required, change the codes below to comments.
    # team을 입력받는 단계. 
    # team 구분이 필요 없다면 아래를 주석 처리
    if [ $mid_step -eq 0 ]; then
        echo "[1] none [2] back [3] front"
        read -p "enter your team [default = 1]: " team_idx

        # trim the blanks from the left-most and the right-most side
        # 좌우 공백 제거
        team_idx=$(trim $team_idx)

        # set the default value with enter or space as [1] none, which does not append any string
        # 엔터나 공백만 있는 경우 기본값을 어떤 문자열도 추가하지 않는 [1] none 으로 설정
        if [ -z "$team_idx" ]; then 
            team_idx=1
        fi

        # [1] none does not need further process
        # [1] none 인 경우 이후 과정 필요 없음
        if [[ "$team_idx" =~ ^[1]$ ]]; then
            break

        # [2] back [3] front, append a team_type string
        # [2] back [3] front 인 경우 team_type 추가
        elif [[ "$team_idx" =~ ^[23]$ ]]; then

            # step done: successfully get the input for a team variable
            # 단계 종료: 성공적으로 팀 변수 입력 받아옴
            team_idx=$((team_idx - 1))
            team_type=${team_types[$team_idx]}
            result="$result/$team_type"
            ((mid_step++))

        # improper input after the regex check
        # 정규식 체크 이후 적절하지 않은 입력일 때
        else
            echo "Invalid team type."
            continue
        fi
    fi


    # a step for getting the issue number with JIRA. 
    # If any JIRA identifier is not required, change the codes below to comments.
    # JIRA 이슈 번호을 입력하는 단계. 
    # team 구분자가 필요 없다면 아래를 주석 처리
    if [ $mid_step -eq 1 ]; then
        read -p "enter the JIRA issue number: " issue_num

        # trim the blanks from the left-most and the right-most side
        # 좌우 공백 제거
        issue_num=$(trim $issue_num)

        # issue_num input should consist of singlular/mutliple digit(s)
        # issue_num 입력은 한 자리 또는 여러 자리의 숫자여야 함
        if [[ "$issue_num" =~ ^[0-9]+$ ]]; then    

            # step done: successfully get the input for a jira issue number variable
            # 단계 종료: 성공적으로 JIRA 이슈 번호 변수 입력 받아옴
            result="$result/$jira_prefix-$issue_num"
            ((mid_step++))
        
        # improper input after the regex check
        # 정규식 체크 이후 적절하지 않은 입력일 때
        else
            echo "Invalid jira issue number."
            continue
        fi
    fi

    # a step for getting a brief description of a branch. 
    # If any brief description is not required, change the codes below to comments.
    # 브랜치에 대한 간단한 요약 설명을 입력하는 단계. 
    # 브랜치명에 요약 설명이 필요 없다면 아래를 주석 처리.
    if [ $mid_step -eq 2 ]; then
        read -p "enter the brief description: " brief_desc

        # trim the blanks from the left-most and the right-most side
        # 좌우 공백 제거
        brief_desc=$(trim $brief_desc)

        # brief_desc should consist of alphabets or spaces and not contain any special symbol except '-'
        # brief_desc 변수는 알파벳이나 공백으로만 이루어져야 하고, '-'를 제외한 특수 문자가 있어서는 안됨
        if [[ -n "$brief_desc" ]] && [[ ! "$brief_desc" =~ [^a-zA-Z[:space:]-] ]] ; then    
            
            # join each words with replacing blanks as a single '-' and turn them into lower-cases
            # 여러 공백을 하나의 '-'로 바꿔서 단어를 연결하고, 소문자로 변환함
            brief_desc=$(echo "$brief_desc" | tr -s ' ' '-')
            brief_desc=$(echo "$brief_desc" | tr "[A-Z]" "[a-z]")
            
            # step done: successfully get the input for the brief description of a branch
            # 단계 종료: 성공적으로 브랜치 요약 설명 변수 입력 받아옴
            result="$result-$brief_desc"
            ((mid_step++))
            break
        
        # improper input after the regex check
        # 정규식 체크 이후 적절하지 않은 입력일 때
        else
            echo "A brief description of a branch should not be empty."
            continue
        fi
    fi
done

# case [3] release [4] hotfix: {branch_type}/{version}
while [ $branch_idx -ge 2 ]; do

    read -p "enter the target version: " target_version

    # trim the blanks from the left-most and the right-most side
    # 좌우 공백 제거
    target_version=$(trim $target_version)

    # target_version should be a string like 'x.x.x' where x is a number
    # target_version 변수는 'x.x.x'와 같은 형식의 문자열으로, x는 수여야 함.
    if [[ "$target_version" =~ ^[0-9]+.[0-9]+.[0-9]+$ ]]; then    
            result="$result/$target_version"
            break
    
    # improper input after the regex check
    # 정규식 체크 이후 적절하지 않은 입력일 때
    else
        echo "Invalid version string."
        continue
    fi

done

# branch name checking manually 
# branch name 확인 입력
echo -e "branch name: $result" 
read -p "press enter to continue." consent

if [[ $consent == "" ]]; then
    git checkout -b "$result"
else 
    echo "The process is canceled."
fi

