export default async function Alt(props: { params: { slug: string } }) {
  return `Launch ${props.params.slug}`;
}
