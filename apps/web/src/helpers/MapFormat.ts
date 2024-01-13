function options(list: any[], labelKey: string = 'name', valueKey: string = 'id'): { value: any; label: any }[] {
  return list.map((item) => ({ label: item[labelKey], value: item[valueKey] }))
}

const MapFormat = {
  options,
}

export default MapFormat
