import Link from 'next/link';

const List = () => {
  const urls = ['Card'];

  return (
    <div>
      {urls.map((url) => {
        return (
          <Link href={`/List/${url}`}>
            <a>
              <h2>竖向下滑卡片</h2>
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default List;
