import { useEffect, useState } from "react";

/**
 * 컴포넌트 렌더링 함수를 주입받는 데이터 패치 컨테이너 컴포넌트
 * @param {*} param0 getData: 데이터 정보 반환 API 호출 함수, render: 컴포넌트 렌더링 함수
 * @returns 컴포넌트 렌더링 함수를 호출하여 반환된 컴포넌트
 */
export const DatasourceLoaderWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getData();
      setResource(response);
    })();
  }, [getData]);
  return render(resource);
};
