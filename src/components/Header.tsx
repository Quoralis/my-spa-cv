export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-6">
      <div className="flex items-center gap-6">
        <img
          className="mx-auto block h-40 w-40 rounded-full sm:mx-0 sm:shrink-0"
          src="/avatar.jpg"
          alt="avatar"
        />
        <div>
          <h1 className="text-4xl font-semibold text-white">
            Stanislav Tsibulskii
          </h1>
          <p className="font-medium text-gray-300">
            Front-End Web Developer
          </p>
        </div>
      </div>
    </header>
  )
}
