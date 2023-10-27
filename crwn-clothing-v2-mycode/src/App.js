import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/home";
import Navigation from "./components/Navigation/navigation";
import Authentication from "./components/Authentication/authenticatoin";
import Shop from "./components/shop/shop";
import CheckOut from "./components/checkout/checkout";
import {
  userOnAuthChangeListner,
  storeUsers,
  getCategoriesAndDocument,
} from "./firebase/fb-config";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./redux/user/userAction";
import { getCategoryAsync } from "./redux/category/categoryAction";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = userOnAuthChangeListner((user) => {
      storeUsers(user);
      dispatch(setCurrentUser(user));
    });

    return unsubscribe;
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkOut" element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
