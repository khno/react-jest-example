import React from 'react';
import Link from '../index';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // 手动触发回调函数
  tree.props.onMouseEnter();
  // 重渲染
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // 手动触发回调函数
  tree.props.onMouseLeave();
  // 重渲染
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});