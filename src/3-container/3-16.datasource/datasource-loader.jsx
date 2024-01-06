import React, { useEffect, useState } from "react";

/**
 * 데이터 정보 반환 API 호출 함수를 주입 받는 데이터 패치 컴포넌트
 * @param {*} param0 getData: 데이터 정보 반환 API 호출 함수, resourceName: 데이터 정보 반환 API 호출 함수의 반환값을 저장할 변수명, children: 자식 컴포넌트
 * @returns 데이터 정보 보여주는 컴포넌트
 */
export const DatasourceLoader = ({
  getData = () => {},
  resourceName,
  children,
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);
  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
