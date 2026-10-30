export default function SubHeader({ title }) {
  return (
    <div
      className="w-full px-6 py-3"
      style={{ backgroundColor: '#F6ECE8' }}
    >
      <span
        className="text-sm font-semibold tracking-widest uppercase"
        style={{ color: '#8A5665' }}
      >
        {title}
      </span>
    </div>
  )
}
