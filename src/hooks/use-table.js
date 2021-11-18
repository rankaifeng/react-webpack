import { useCallback } from 'react';
import useAxios from './use-axios';
import usePageination, { defaultPagination } from './use-pagination';
const useTable = options => {
  const { axios, params, tag } = options;
  /**
   * 网络请求hooks
   */
  const { data = {}, loading, doAxios, reAxios, resetAxios } = useAxios(
    axios, {
    ...defaultPagination,
    ...params
  }, tag)
  /**
   * 分页hooks
   */
  const { paginationConfig, setPagination } = usePageination({
    total: data.total,
    ...(options.pagination || {}),
    onChange: (page, pageSize) => {
      if (!options.onChange) {
        if (options.pagination && options.pagination.onChange) {
          options.pagination.onChange(page, pageSize)
        } else {
          doAxios({ page, pageSize })
        }
      }
    }
  })
  /**
   * 最终table的所有配置 包含数据源 加载状态 分页
   */
  const tableProps = {
    dataSource: data.rows,
    loading,
    pagination: paginationConfig,
    bordered: true,
    rowClassName: (record, index) => {
      return index % 2 ? 'shallow_gray' : 'deep_gray';
    }
  }
  /**
   * 让外部可以调用网络请求方法 比如搜索
   */
  const questAxios = useCallback(
    params => {
      doAxios(params);
      if (params && params.page) {
        setPagination({
          pageSize: paginationConfig.pageSize,
          current: params.page
        })
      }
    }, [paginationConfig, setPagination, doAxios])

  return {
    tableProps,
    questAxios,
    reAxios,
    resetAxios
  }
}

export default useTable;