from haversine import haversine, Unit
import pandas as pd
import folium


class Preprocessor:
    pass



# csv파일 불러옴
file_path = r'./../../data/csv/yeongdeungpo.csv'
df = pd.read_csv(file_path, sep=',', encoding='utf-8-sig')

# print(df)
# print(df.columns)
# print(df['nickname'])

### 닉네임이 'ph**'인 데이터 필터링 ###
# 해당 조건을 만족하면 true, 아니면 false인 dataframe 리턴
user = df['nickname'] == 'ev**'
# 조건이 true인 행들만 담아 dataframe으로 리턴
user = df[user]

# print(user)

# print(ph['id'].drop_duplicates().tolist())

# 조건을 만족하는 리뷰 리스트의 shopid를 중복을 제거하고 리스트로 리턴
user_shop_list = user['id'].drop_duplicates().tolist()

# 기준점 위경도
# target = df.head(1)
target_geo = df[['lat', 'lng']].iloc[1].to_frame()
print(target_geo)

# 이중 리스트로 되어있는 것을 flatten
target_lat, target_lng = target_geo_list = sum(target_geo.values.tolist(), [])
# print(sum(target_geo.values.tolist(), []))

# folium map 생성
map = folium.Map(location=[target_lat, target_lng], zoom_start=14)
filtered_df = pd.DataFrame()
print(type(filtered_df))
for item in user_shop_list:
    is_item = df['id'] == item
    one_row = df[is_item].head(1)
    # print(one_row[['id', 'name', 'lat', 'lng']])
    if haversine(target_geo_list, [one_row['lat'], one_row['lng']]) <= 1.5:
        filtered_df = filtered_df.append(one_row)
        folium.Marker([one_row['lat'], one_row['lng']],
                      tooltip=one_row['name']
                      ).add_to(map)
print(filtered_df)
filtered_df.to_csv('filtered_df.csv', sep=',', encoding='utf-8-sig')
map.save('map.html')








