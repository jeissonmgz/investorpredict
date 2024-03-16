import React, { useCallback, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Coin } from "src/core/models";
import { HyperLink, Loading } from "src/app/components";


interface IScrollList {
  coins: Coin[];
}

const ScrollList = ({ coins }: IScrollList) => {
  const ITEMS_PER_PAGE = 200;
  const [, setPage] = useState(0);
  const [coinShow, setCoinShow] = useState<Coin[]>([]);
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
        <>
        <p className="info_result ">Hemos encontrado <b>{coinShow.length}</b> criptomonedas, haz click y dale un vistazo</p>
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
        </>
      )}
    </div>
  );
};

export default ScrollList;
