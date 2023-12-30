import BusinessIcon from 'src/components/icons/BusinessIcon'

function Interest() {
  return (
    <div className="flex flex-col items-center justify-center w-[120px] h-[120px] rounded-[50%] bg-primary">
      <div className="text-white w-[40px] h-[40px]">
        <BusinessIcon />
      </div>
      <span className="text-white text-[0.875rem] pt-[12px] font-normal">비지니스</span>
    </div>
  )
}

export default Interest
