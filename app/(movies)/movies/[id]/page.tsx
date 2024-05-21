export const metadata = {
  title: 'Movies',
}

export default function Movies({ params: { id } }: { params: { id: string } }) {
  return <h1>Movies {id}</h1>
}
