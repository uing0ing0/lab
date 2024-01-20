import axios from "axios";
import { useAtom } from "jotai";
import { useState } from "react";
import { set } from "react-ga";
import { useNavigate } from "react-router-dom";
import Button, { ButtonVariant } from "src/atoms/button/Button";
import Flex from "src/atoms/containers/flex/Flex";
import Navbar from "src/atoms/navbar/Navbar";
import SearchInput from "src/atoms/searchInput/SearchInput";
import Text from "src/atoms/text/Text";

import {
  userEmailAtom,
  userNameAtom,
  userPasswordAtom,
  userTokenAtom,
} from "../../utils/Atom";
const Login = () => {
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");
  const [userEmail, setUserEmail] = useAtom(userEmailAtom);
  const [userPassword, setUserPassword] = useAtom(userPasswordAtom);
  const [name, setUserName] = useAtom(userNameAtom);
  const [userToken, setUserToken] = useAtom(userTokenAtom);
  const navigate = useNavigate();
  const api = axios.create({
    baseURL: "/api",
    withCredentials: true,
  });
  const handleLogin = async () => {
    const data = {
      email: userEmail,
      password: userPassword,
    };
    const res = await api.post("/auth/login", data).then((response) => {
      if (response.status === 200) {
        navigate("/");
        setUserEmail(tempEmail);
        setUserPassword(tempPassword);
        setUserToken(response.data.data.token);
        setUserName(response.data.data.name);
        console.log(response.data);
        console.log("login success");
        console.log(userToken);
        console.log(name);
      }
    });
  };
  return (
    <>
      <Flex flexDirection="column" alignItems="center" gap="15px">
        <Button width={"250px"} variant={ButtonVariant.outlined}>
          <SearchInput
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            onChange={(e) => setTempEmail(e.target.value)}
          />
        </Button>
        <Button width={"250px"} variant={ButtonVariant.outlined}>
          <SearchInput
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setTempPassword(e.target.value)}
          />
        </Button>
        <Button
          variant={ButtonVariant.contained2}
          width={"250px"}
          height={"40px"}
          type="submit"
          onClick={() => {
            handleLogin();
          }}
        >
          로그인
        </Button>

        <Button
          variant={ButtonVariant.contained2}
          width={"250px"}
          height={"40px"}
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
          className="form-container"
        >
          회원가입
        </Button>
        <Button
          onClick={() => {
            navigate("/findpw");
          }}
        >
          <Text>비밀번호 찾기</Text>
        </Button>
      </Flex>
    </>
  );
};

export default Login;
