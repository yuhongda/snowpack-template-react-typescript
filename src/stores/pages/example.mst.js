import { types, flow } from 'mobx-state-tree';
import { toJS } from 'mobx';
import React, { useRef } from 'react';

const ExampleStore = types
  .model('ExampleStore', {
    bool: types.optional(types.boolean, true),
    strs: types.optional(types.string, ''),
    arrs: types.optional(types.array(types.string), []),
  })
  .volatile((self) => ({
    text: null,
  }))
  .views((self) => {
    return {};
  })
  .actions((self) => ({
    afterCreate() {},
    setText(value) {
      self.text = value;
    },
  }));

export default ExampleStore;
