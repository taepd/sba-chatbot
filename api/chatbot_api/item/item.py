from sqlalchemy import Column, Integer, String, ForeignKey
from com_sba_api.ext.db import Base


class Item(Base):
    __tablename__ = 'items'

    id = Column(Integer, primary_key=True, index=True)