import { Refine } from '@pankod/refine-core';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider from '@pankod/refine-simple-rest';

import { PostCreate, PostList, PostShow } from 'pages/posts';
import { PostEdit } from 'pages/posts/edit';

import { PostIcon } from 'icons';

import { Layout } from 'components/Layout';

import 'index.css';

function App() {
  return (
    <div>
      <Refine
        routerProvider={routerProvider}
        dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
        resources={[
          {
            name: "posts",
            icon: PostIcon,
            list: PostList,
            show: PostShow,
            edit: PostEdit,
            create: PostCreate,
          },
        ]}
        Layout={Layout}
      />
    </div>
  );
}

export default App;
