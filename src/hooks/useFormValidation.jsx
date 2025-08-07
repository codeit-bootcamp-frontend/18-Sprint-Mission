import { useEffect, useState, useRef } from "react";
import useToggle from "@/hooks/useToggle";
import {
  validateEmail,
  validateNickname,
  validatePassword,
  validatePasswordConfirm,
} from "@/utils/formValidation";
const VALIDATORS = {
  userEmail: validateEmail,
  userNickname: validateNickname,
  userPassword: validatePassword,
  userPasswordConfirm: validatePasswordConfirm,
};

const useFormValidation = (init = {}) => {
  // 입력 폼 상태
  const [formData, setFormData] = useState(init);

  // 에러메세지 상태
  const [formErrors, setFormErrors] = useState(
    Object.keys(init).reduce((acc, key) => {
      acc[key] = "";
      return acc;
    }, {})
  );

  // 최초 마운트시 상태 메세지 미노출
  const isMountRef = useRef(
    Object.keys(init).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {})
  );

  // 비밀번호 토글 상태
  const [showPassword, togglePassword] = useToggle(false);
  // 유효성 검증 상태
  const [isFormValid, setIsFormValid] = useState(false);
  // useEffect 로 패스워드와, 패스워드 컨펌이 같이 업데이트 되기 떄문에 최초 포커스 되지 않았을때는 메세지 미노출
  const [isConfirmFocus, setIsConfirmFocus] = useState(false);

  // 공통 유효성 검사 input name을 받아서 VALIDATORS 에 있는 함수로 검사
  const validateField = (name, value) => {
    const validator = VALIDATORS[name];
    if (!validator) return "";
    if (name === "userPasswordConfirm") {
      return validator(value, formData.userPassword);
    }
    return validator(value);
  };
  // 인풋 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 마운트 후 포커스 여부 판단
  const handleBlur = (e) => {
    const { name } = e.target;
    setIsConfirmFocus(true);
    isMountRef.current[name] = true;

    const errorMsg = validateField(name, formData[name]);
    setFormErrors((prev) => ({ ...prev, [name]: errorMsg }));
  };

  // 제출 전 검증 핸들러
  const handleSubmit = (e) => {
    const errors = {};
    Object.keys(formData).forEach((name) => {
      errors[name] = validateField(name, formData[name]);
    });
    setFormErrors(errors);
  };
  
  // 데이터가 변경 될때마다 유효성 검증
  // 별도의 useEffect 이유 : 작성 전 데이터 까지 검증하는것 방지
  useEffect(() => {
    if (isMountRef.current.userEmail) {
      setFormErrors((prev) => ({
        ...prev,
        userEmail: validateEmail(formData.userEmail),
      }));
    }
  }, [formData.userEmail]);
  useEffect(() => {
    if (isMountRef.current.userNickname) {
      setFormErrors((prev) => ({
        ...prev,
        userNickname: validateNickname(formData.userNickname),
      }));
    }
  }, [formData.userNickname]);
  useEffect(() => {
    if (isMountRef.current.userPassword) {
      setFormErrors((prev) => ({
        ...prev,
        userPassword: validatePassword(formData.userPassword),
      }));
    }
  }, [formData.userPassword]);
  useEffect(() => {
    if (isMountRef.current.userPasswordConfirm && isConfirmFocus) {
      setFormErrors((prev) => ({
        ...prev,
        userPasswordConfirm: validatePasswordConfirm(
          formData.userPasswordConfirm,
          formData.userPassword
        ),
      }));
    }
  }, [formData.userPasswordConfirm, formData.userPassword, isConfirmFocus]);

  // 전체 폼 유효성 체크
  useEffect(() => {
    const allFilled = Object.values(formData).every((val) => val.trim() !== "");
    const noErrors = Object.values(formErrors).every((msg) => msg === "");
    setIsFormValid(allFilled && noErrors);
  }, [formData, formErrors]);

  return {
    formData, // input data
    formErrors, // 에러메세지
    isFormValid, // 전체 유효성 통과
    showPassword, // 비밀번호 보기
    togglePassword, // 토글 hook
    handleChange, // input change 함수
    handleBlur, // 포커스 여부 판단 함수
    handleSubmit, // 제출 시 유효성 검사 함수
  };
};

export default useFormValidation;
