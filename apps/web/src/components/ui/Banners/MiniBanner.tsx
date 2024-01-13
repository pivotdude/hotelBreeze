interface MiniBannerProps {
  title: string
  buttonText: string
  onClick: () => void
  src: string
}

export default function MiniBanner({
  title,
  src,
  onClick,
  buttonText,
}: MiniBannerProps) {
  return (
    <div
      className="w-full h-[600px] bg-cover bg-center bg-no-repeat cursor-pointer"
      style={{ backgroundImage: 'url(' + src + ')' }}
    >
      <div className="p-20">
        <p className="font-medium text-white text-[48px] tracking-[0] leading-[56px] pb-20">
          Things to do
          <br />
          on your trip
        </p>
      </div>
    </div>
  )
}
