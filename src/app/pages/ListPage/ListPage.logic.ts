import { ChangeEvent, MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { domain } from "src/core";
import { Coin } from "src/core/models";

interface IListPageLogic {
  onChangeFilterHandler: (event: ChangeEvent<HTMLInputElement>) => void;
  filter: string;
  coinsFiltered: Coin[];
  coins: Coin[];
  searchInputRef: any;
  onInputSearchFocusHandler: (event: MouseEvent<HTMLAnchorElement>) => void;
}

export const ListPageLogic = (): IListPageLogic => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [coinsFiltered, setCoinsFiltered] = useState<Coin[]>([]);
  const [filter, setFilter] = useState("");
  
  useEffect(() => {
    domain.getCoinsUseCase().then((result) => {
      setCoins(result);
    });
  }, []);

  const onChangeFilter = useCallback((
    value: string
  ): void => {
    setFilter(value);
    setCoinsFiltered(domain.findCoinUseCase(value, coins));
  }, [setFilter, setCoinsFiltered, coins]);

  const onChangeFilterHandler = (
    event: ChangeEvent<HTMLInputElement>
  ): void => {
    const value = event.target.value;
    onChangeFilter(value);
  };

  const onInputSearchFocusHandler = (
    event: MouseEvent<HTMLAnchorElement>
  ): void => {
    event.preventDefault();
    onInputSearchFocus(); 
  };
    
  const searchInputRef = useRef();
  const onInputSearchFocus = useCallback(()=> {
    (searchInputRef.current as any)?.focus();
  }, []);
  useEffect(()=> {
    const coinSearched = (new URLSearchParams(window.location.search)).get("search")
    if (searchInputRef.current && !!coinSearched && !!coins) {
      onInputSearchFocus();
      onChangeFilter(coinSearched);
      (document as any).getElementById('search-coin').scrollIntoView({
        behavior: 'smooth'
      });
    }
  }, [searchInputRef, onInputSearchFocus, onChangeFilter, coins]);

  return {
    onChangeFilterHandler,
    filter,
    coinsFiltered,
    coins,
    searchInputRef,
    onInputSearchFocusHandler
  };
};
