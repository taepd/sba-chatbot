import mysql.connector
from com_sba_api.ext.db import config


class ItemDao:

    def __init__(self):
        self.connector = mysql.connector.connect(**config)
        self.cursor = self.connector.cursor(dictionary=True)

    def select_foods(self):
        con = self.connector
        cur = self.cursor
        rows = []
        try:
            cur.execute('select * from food',)
            rows = cur.fetchall()
            for row in cur:
                print(f'price is : {str(row["price"])}')
            cur.close()
        except:
            print('Exception...')
        finally:
            if con is not None:
                con.close()
        return rows


if __name__ == '__main__':
    dao = ItemDao()
    dao.select_foods()
