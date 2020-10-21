from haversine import haversine, Unit
import pandas as pd
import folium


class Preprocessor:
    pass


# csv파일 불러옴
file_path = r'./../../data/csv/gangnam.csv'
df = pd.read_csv(file_path, sep=',', encoding='utf-8-sig')

file_path2 = r'./../../data/csv/store.csv'
shop_df = pd.read_csv(file_path, sep=',', encoding='utf-8-sig')

# print(df)
# print(df.columns)
# print(df['nickname'])

###############################
# 샘플 데이터 테스트 코드

### 닉네임에 따라 데이터 필터링 ###
# 해당 조건을 만족하면 true, 아니면 false인 dataframe 리턴
# nickname = 'kh**'
# user = df['nickname'] == nickname
# 조건이 true인 행들만 담아 dataframe으로 리턴
# user = df[user]

# print(user)

# print(user['id'].drop_duplicates().tolist())

# 조건을 만족하는 리뷰 리스트의 id(shop)를 중복을 제거하고 리스트로 리턴
# user_shop_list = user['id'].drop_duplicates().tolist()

# 기준점 위경도
# target = df.head(1)
# target_geo = df[['lat', 'lng']].iloc[1].to_frame() //df 방식
# print(target_geo)
# target_lat, target_lng = target_geo_list = (37.520775, 127.022767)


# 이중 리스트로 되어있는 것을 flatten
# target_lat, target_lng = target_geo_list = sum(target_geo.values.tolist(), [])  # df방식
# print(sum(target_geo.values.tolist(), []))



# folium map 생성
# map = folium.Map(location=[target_lat, target_lng], zoom_start=14)
# filtered_df = pd.DataFrame()
# # print(type(filtered_df))
# for item in user_shop_list:
#     is_item = df['id'] == item
#     row = df[is_item]
#     one_row = row.head(1)
#     # print(one_row[['id', 'name', 'lat', 'lng']])
#     if haversine(target_geo_list, [one_row['lat'], one_row['lng']]) <= 1:
#
#         filtered_df = filtered_df.append(df[(df['nickname'] == nickname) & (df['id'] == item)])
#         # folium.Marker([one_row['lat'], one_row['lng']],
#         #               tooltip=one_row['name']
#         #               ).add_to(map)


# print(filtered_df)
# filtered_df.to_csv('filtered_df.csv', sep=',', encoding='utf-8-sig')
# map.save('map.html')
###############################


# 기준점 위경도
target_lat, target_lng = target_geo_list = (37.520775, 127.022767)

# print(df)

# 리뷰 리스트에서 id(shop)를 중복을 제거하고 리스트로 리턴
shop_list = df['id'].drop_duplicates().tolist()
print(shop_list)


# 기준점으로 부터 반경 1km 이내의 매장만 필터링
def filter_shop(i):
    one_row = df[df['id'] == i].head(1)
    if haversine(target_geo_list,
                 [one_row['lat'].head(1), one_row['lng'].head(1)]) <= 1:
        return i


filtered_shop_list = filter(filter_shop, shop_list)
# print(list(filtered_shop_list))


# ================================
# 기준점 내의 매장에 리뷰를 쓴 아이디 리스트 필터링
user_list = []
for shop in filtered_shop_list:
    nickname = df[df['id'] == shop]['nickname'].tolist()
    user_list.append(nickname)

# print(user_list)
# flatten(1차원 리스트화)
user_list = sum(user_list, [])
# print(user_list)
# print('--------------------------')
# 중복 제거
user_list = list(set(user_list))
print(user_list)
# ================================
user_df = pd.DataFrame()
count = 0
for shop in shop_list:
    for user in user_list:
        is_shop_user = (df['id'] == shop) & (df['nickname'] == user)
        user_review_list = df[is_shop_user]
        if not user_review_list.empty:
            userid = f'user{str(count).zfill(6)}'
            df['userid'] = userid
            user_df['userid'] = userid
            user_df['lat'] = shop_df[shop_df['id'] == shop]['lat']
            user_df['lng'] = shop_df[shop_df['id'] == shop]['lng']

            count += 1
    break

print(user_df)
print(df)




















