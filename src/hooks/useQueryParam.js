import { useLocation } from 'react-router'
import queryString from 'query-string'

function useQueryParam() {
  return new queryString.parse(useLocation().search)
}

export default useQueryParam
