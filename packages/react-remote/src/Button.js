import React, { useEffect, useCallback, Suspense } from 'react';
import Jotai from './Jotai';
import RQuery from './RQuery';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import dayjs from 'dayjs';

// 2024 06.03 12:30 분보다 이후이면 true 리턴
const isAfter1230 = () => {
  return dayjs().isBefore(dayjs('2024-06-03 12:50'));
}

const queryClient = new QueryClient({});

export default ({ text = 'Home Button', onClick, inputValue }) => {
  const onClickHandler = useCallback(() => {
    console.log(`Button.js: "${text}" clicked!`);
    onClick?.();
  }, [text, onClick]);

  useEffect(() => {
    console.log('Button.js: mounted.');
    return () => console.log('Button.js: unmounted.');
  }, []);

  console.log('Button.js: rendered.');

  return (
    <>
      <h1>change test...............................</h1>
      {isAfter1230().toString()}
      {isAfter1230() && <h1>2024 06.03 12:50 분보다 이후입니다.</h1>}
      <Suspense fallback={<div>loading...</div>}>
        <Jotai />
        <QueryClientProvider client={queryClient}>
          <RQuery />
        </QueryClientProvider>
        <button onClick={onClickHandler}>{text}</button>
        <div>input: {inputValue}</div>
      </Suspense>
    </>
  );
};
