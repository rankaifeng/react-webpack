import { useCallback, useEffect, useState } from "react";
import { defaultPagination } from './use-pagination';

/**
 * 
 * @param {*} axios 调用网络请求的方法
 * @param {*} params 传入参数
 */
const useAxios = (axios, params, tag) => {

  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [newParams, setNewParams] = useState(params);

  const axiosApi = useCallback(() => {
    setLoading(true);
    axios(newParams, tag).then(res => {
      if (res.code === 200) {
        setData(res.data);
      }
      setLoading(false);
    }).catch(e => {
      setLoading(false);
    });
  }, [axios, newParams])

  useEffect(() => {
    axiosApi();
  }, [axiosApi])

  /**
   * 重新传入参数请求 比如 分页
   */
  const doAxios = useCallback(rest => {
    rest ? setNewParams({ ...newParams, ...(rest || {}) }) :
      setNewParams({ ...defaultPagination })
  }, [newParams])

  const resetAxios = rest => {
    setNewParams({ ...defaultPagination, ...(rest || {}) })
  }
  /**
   * 再次刷新网络请求
   */
  const reAxios = () => {
    setNewParams(Object.assign({}, newParams));
  }

  return {
    loading,
    data,
    doAxios,
    reAxios,
    resetAxios
  }
}
export default useAxios;