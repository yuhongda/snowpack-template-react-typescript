import { types } from 'mobx-state-tree';
import CommonStore from '@/stores/common.mst';
import RouterStoreInstance from '@/stores/router.store';
import ExampleStore from './pages/example.mst';

const RootStore = types
  .model('RootStore', {
    common: types.optional(CommonStore, {}),
    example: types.optional(ExampleStore, {}),
  })
  .volatile((self) => ({
    router: RouterStoreInstance,
  }));

export default RootStore.create({});
