import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { HyperLink, Loading } from "../../../components";

import { ICoin } from "../../../services";

interface IScrollList {
  coins: ICoin[];
}

const ScrollList = ({ coins }: IScrollList) => {
  const ITEMS_PER_PAGE = 200;
  const [, setPage] = useState(0);
  const [coinShow, setCoinShow] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(false);

  const getLazyItems = useCallback(() => {
    setTimeout(() => {
      setPage((page) => {
        const pagePlusItems = page + ITEMS_PER_PAGE;
        const size = coins.length;
        const newPages = pagePlusItems > size ? size : pagePlusItems;
        setCoinShow(coins.slice(0, newPages));
        return newPages;
      });
    }, 100);
  }, [coins]);

  useEffect(() => {
    setLoading(true);
    setPage(0);
    setCoinShow([]);
    setLoading(false);
    getLazyItems();
  }, [coins, getLazyItems]);

  return (
    <div className="list_page__container">
      {!loading && (
        <InfiniteScroll
          dataLength={coinShow.length}
          next={getLazyItems}
          hasMore={coinShow.length !== coins.length}
          loader={<Loading />}
        >
          {coinShow.map((coin) => (
            <React.Fragment key={coin.id}>
              <HyperLink to={`${coin.id}`}>{coin.name}</HyperLink>
            </React.Fragment>
          ))}
        </InfiniteScroll>
      )}
    </div>
  );
};

export default ScrollList;
