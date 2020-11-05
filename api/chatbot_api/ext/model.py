import os
import sys

sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
baseurl = os.path.dirname(os.path.abspath(__file__))


from surprise import Reader, Dataset, SVD, NMF
from surprise.model_selection import train_test_split
import pandas as pd

"""
데이터 로딩
surprise data형식에 맞춰 dataframe 변환
"""

df = pd.read_csv("./data/csv/important/db/order_review(remove_userid_nan).csv", sep=",", encoding='utf-8-sig', error_bad_lines=False, engine="python")

"""- 필요한 컬럼만 추출"""

df = df[['userid', 'shop_id', 'taste_rate', 'quantity_rate', 'delivery_rate']]

"""- 합계 평점 컬럼 생성"""

df['rating'] = (df['taste_rate'] + df['quantity_rate'] + df['delivery_rate'])/3

"""- 세부 평점 컬럼 제거"""

df = df[['userid', 'shop_id', 'rating']]

"""- 정렬"""

df_sort = df.sort_values(by=['userid', 'shop_id'], axis=0)

"""- 그룹화"""

# groupby_df = df_sort.groupby(["userid", 'shop_id'])  # groupby 객체 상태
df_group = df_sort.groupby(["userid", 'shop_id']).mean()  # groupby 객체 상태
df = df_group.reset_index()  # reset_index를 해주면 dataframe 객체가 됨

''' 예측값과 비교할 때 사용할 실제값 dataframe'''
df_backup = df
# df = groupby_df.head()  # 이유는 모르겠지만 head를 붙였더니 dataframe화 되었음 -> 실수로 인한 잘못된 해결챇

"""- 평점이 0인 항목을 제거"""

df = df.loc[(df.rating != 0)]

"""- 잘 변경 되었는지 확인"""

df1 = df[df['rating'] == 0]

"""- 유저 리스트 및 유저 수
    - 주의: 일부 유저 연번은 데이터 처리 과정에서 업데이트되어 리뷰 데이터가 없어졌음.
"""

unique_user_list = df.userid.unique()
n_users = unique_user_list.shape[0]


"""- 매장 리스트 및 매장 수 조회"""

unique_shop_list = df.shop_id.unique()
n_shops = unique_shop_list.shape[0]

"""### 데이터 변환(Data Transformation)
- 벡터화 연산을 위해 문자열을 숫자로 변환 필요

- 유저를 숫자로 변환
"""

# df.userid = df.userid.astype('category').cat.codes.values  # 향후 확인을 위해 이 방식보다는 map을 사용해야 함
df['userid'] = df['userid'].map(lambda x: int(x.lstrip('user')))


reader = Reader(rating_scale=(0.5, 5))
data = Dataset.load_from_df((df[['userid', 'shop_id', 'rating']]), reader=reader)
train, test = train_test_split(data, test_size=0.25, random_state=42)
# trainset = data.build_full_trainset()


#################
# csv 파일 로드
# reader = Reader(line_format='user item rating', sep=',',
#                rating_scale=(0.5, 5))
# data = Dataset.load_from_file('./modeling/model_df.csv',reader=reader)
# trainset = data.build_full_trainset()
# train, test = train_test_split(data, test_size=0.25, random_state=42)
#################
"""
모델 설정 및 학습
"""

# model = SVD()
# cross_validate(model, data, measures=['rmse', 'mae'], cv=5, verbose=True)

# 전체 데이터셋을 학습
model = SVD(n_factors=64, n_epochs=20, random_state=42)
# model.fit(train)
model.fit(train)

# print(model.test(test))


@classmethod
def predict(user, item):
    return model.predict(user, item)

print('============= 모델 학습 완료 ==============')


"""
예측 및 평가
"""

# # testset = Trainset.build_testset(trainset)
# # prediction_list = model.test(testset)
# pred = model.predict(777, 4960)
# print(pred)
# dump.dump('surprise_svd', predictions=prediction_list, algo=None, verbose=1)

# loaded_model = dump.load('surprise_svd')

# print(loaded_model[0])