import DirectoryItem from "../directory-item/directory-item";

const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => {
        return (
          <DirectoryItem
            key={category.id}
            imageUrl={category.imageUrl}
            categoryTitle={category.title}
          />
        );
      })}
    </div>
  );
};

export default Directory;
