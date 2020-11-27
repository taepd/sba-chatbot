import re
import pandas as pd
import numpy as np



shop_df = pd.read_csv('./data/db/order_review.csv', encoding='utf8')

shop_df["review_cmnt"] = shop_df["review_cmnt"].str.replace("[^ㄱ-ㅎ ㅏ-ㅣ 가-힣]","") # 한글만 추출
shop_df["review_cmnt"] = shop_df["review_cmnt"].str.replace("[ㄱ-ㅣ]*","") # ㅋㅋ,ㅎㅎ 삭제

shop_df["owner_cmnt"] = shop_df["owner_cmnt"].str.replace("[^ㄱ-ㅎ ㅏ-ㅣ 가-힣]","") # 한글만 추출
shop_df["owner_cmnt"] = shop_df["owner_cmnt"].str.replace("[ㄱ-ㅣ]*","") # ㅋㅋ,ㅎㅎ 삭제
# 앞 공백 처리
shop_df["review_cmnt"] = shop_df["review_cmnt"].str.strip()
shop_df["owner_cmnt"] = shop_df["owner_cmnt"].str.strip()



# Null행 삭제
# shop_df = shop_df.dropna()
print(shop_df.isnull().sum())


shop_df.to_csv('test1.csv', sep=",", encoding="utf-8-SIG", index=False)

