import { Frame } from '@nativescript/core'

export const TextField = () => {

  function goBack() {
    Frame.goBack();

  }  return (
    <>
      <actionbar title="ActionBar">
        <actionitem on:tap={goBack} text='<<Back'>
        </actionitem>
      </actionbar>
      {/* @ts-ignore */}
    </>
  );
};
