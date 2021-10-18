import './collection-preview.scss';

export default function CollectionPreview({ title, items }) {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
        // will show only four items as a preview. might affect the performance if the data gets very large
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  );
}
