import { useMemo, useState } from "react"
/**
 * 默认分页参数
 */
export const defaultPagination = {
  pageSize: 10,
  page: 1
}

const usePageination = (config = defaultPagination) => {
  const [pagination, setPagination] = useState({
    pageSize: config.pageSize || defaultPagination.pageSize,
    current: config.page || defaultPagination.page
  })

  /**
   * 分页参数 包含 当前页数 当前条数 以及 分页事件
   */
  const paginationConfig = useMemo(() => {
    const { pageSize, current } = pagination;
    return {
      showTotal: total => `共${total}条`,
      showSizeChanger: true,
      ...config,
      pageSize,
      current,
      onChange: (current, pageSize) => {
        onPageChange(current, pageSize);
      },
      onShowSizeChange: (current, pageSize) => {
        onPageChange(current, pageSize);
      }
    }
  }, [config, pagination])

  /**
   * 更新分页
   * @param {*} current 当前页码
   * @param {*} pageSize 当前条数
   */
  const onPageChange = (current, pageSize) => {
    if (config.onChange) {
      config.onChange(current, pageSize)
    }
    setPagination(current, pageSize)
  }

  return { paginationConfig, setPagination };
}
export default usePageination;