const users = [
  {
    id: 0,
    name: "네이버",
    url: "https://www.naver.com",
  },

  {
    id: 1,
    name: "카카오",
    url: "https://www.kakao.com",
  },

  {
    id: 2,
    name: "구글",
    url: "https://www.google.co.kr",
  },
];

export const Problem = () => {
  return (
    <div>
      <h2>즐겨찾기</h2>
      {users.map((a) => (
        <h3 key={a.id}>
          <a href={a.url} target="_blank">
            {a.name}
          </a>
        </h3>
      ))}
    </div>
  );
};
