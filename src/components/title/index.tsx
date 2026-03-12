const Title = ({ title }: { title: string }) => {
  throw new Error("#Erro ao carregar o título#");

  return (
    <h1 className="text-3xl font-bold mb-4">{title}</h1>
  );
}

export default Title;

