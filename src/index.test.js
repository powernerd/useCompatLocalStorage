import test from 'ava';
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { JSDOM } from 'jsdom'
import "regenerator-runtime/runtime";

test.before(t => {
  // Set up the document
  const { window } = new JSDOM('');
  global.window = window;
  global.document = window.document;
  global.navigator = {
    userAgent: 'node.js',
  };  
})


import useCompatLocalStorage from './index.js';
const Foo = () => {
  const isCompatible = useCompatLocalStorage();
  return (
    <div id="result">Supports localStorage: {isCompatible}</div>
  )
}


let container;
test.beforeEach(t => {
  container = document.createElement('div');
  document.body.appendChild(container);
})
test.afterEach(() => {
  // unmountComponentAtNode(container);
  // container.remove();
  // container = null;
});


// test('render Foo', (t) => {
//   act(() => {
//     render(<Foo />, container);
//   });
//   const actual = container.querySelector('#result').textContent;
//   const expected = "Supports localStorage: ";
//   t.is(actual, expected);
// });

test('async render Foo', async (t) => {
  await act(async () => {
    await render(<Foo />, container);
  });

  const actual = container.querySelector('#result').textContent;
  const expected = "Supports localStorage: ";
  t.is(actual, expected);
});

test('async render Foo (2)', async (t) => {
  await act(async () => {
    await render(<Foo />, container);
  });

  const actual = container.querySelector('#result').textContent;
  const expected = "Supports localStorage: ";
  t.is(actual, expected);
});





