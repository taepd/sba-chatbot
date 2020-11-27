import pandas as pd

food_df = pd.read_csv('./data/db/shop.csv')

o_df = pd.read_csv('./data/db/order_review.csv')

o_id_df = o_df['or_id']


df = pd.merge(food_df, o_df, on='shop_id')
print(df.head())
print(df.shape)

df1 = df.dropna(subset=['food_id'])
df2 = df1[['or_id','order_time','review_cmnt','taste_rate','quantity_rate','delivery_rate','review_time','owner_cmnt','userid','shop_id','food_id_y']]
print(df1.shape)

df2.to_csv('food.csv', encoding='utf-8-sig', index=False)