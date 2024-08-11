import { Suspense } from "react"
import { Routes, Route, useNavigate, useLocation, useParams, useSearchParams } from 'react-router-dom';
import routes from "./routes";

/* 统一路由配置 */
const Element = function (props) {
 let { component: Component, meta } = props;

 // 修改页面的TITLE
 let { title = "APP名称-首页" } = meta || {};
 document.title = title;

 // 获取路由信息,基于属性传递给组件
 const navigate = useNavigate(),
  location = useLocation(),
  params = useParams(),
  [usp] = useSearchParams();

 return <Component
  navigate={navigate}
  location={location}
  params={params}
  usp={usp}
 ></Component>
}

const RouterView = function () {
 return <Suspense>
    <Routes>
    {routes.map(item => {
      let { name, path, children } = item;
      return <Route key={name}
      path={path}
      element={
        <Element {...item} />
      } >;
        {!!children && children.map(i => {
            return <Route
                key={i.path}
                exact={i.exact}
                path={i.path}
                element={<Element {...i} />}
            />
        })}
      </Route>
    })}
    </Routes>
 </Suspense>
}
export default RouterView