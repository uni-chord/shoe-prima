package com.unichord.shoeprima.shoeprimaserver.review.service.recommend.infrastructure.slope;


import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class DataMatrix {

    private final Map<Long, Map<Long, ItemCounter>> matrix;

    private final Map<Long, Map<Long, Byte>> dataByMember;

    public DataMatrix(List<DataModel> dataModel){
        this.matrix = new HashMap<>();
        this.dataByMember = new HashMap<>();

        prepareMatrix(dataModel);
    }

    private void prepareMatrix(List<DataModel> dataModel){
        for(DataModel model : dataModel){
            final Long memberId = model.getMemberId();

            // dataMember에 memberId 키가 존재한다면 해당 키와 대응되는 값을 가져와 itemByMember에 할당해준다.
            // dataMember에 memberId 키가 존재하지 않는다면, memberId를 키로 하고,
            // new HashMap<>()을 값으로 한 쌍을 dataByMember에 추가해주고, itemByMember에 할당해준다.
            final Map<Long, Byte> itemByMember = dataByMember
                    .computeIfAbsent(memberId, id -> new HashMap<>());

            for(Map.Entry<Long, Byte> itemRatingCnt : itemByMember.entrySet()){
                final Long itemId = itemRatingCnt.getKey();
                final Byte ratingCnt = itemRatingCnt.getValue();

                if(itemId.equals(model.getItemId())) continue;

                final Map<Long, ItemCounter> primaryMap =
                        matrix.computeIfAbsent(model.getItemId(), id -> new HashMap<>());

                final Map<Long, ItemCounter> secondaryMap =
                        matrix.computeIfAbsent(itemId, id -> new HashMap<>());

                primaryMap.computeIfAbsent(itemId, id -> new ItemCounter()).addSum(ratingCnt - model.getRatingCnt());

            }

            itemByMember.put(model.getItemId(), model.getRatingCnt());

        }
    }

    public Map<Long, Map<Long, ItemCounter>> getMatrix(){return matrix;}

    public Map<Long, Byte> getDataByMember(Long id){return dataByMember.getOrDefault(id, new HashMap<>());}
    // dataByMember에 매개변수로 가져온 id가 키로 존재한다면, 대응되는 value를 반환하고.
    // dataByMember에 매개변수로 가져온 id가 키로 존재하지 않는다면, new HashMap<>();을 반환한다.


}
