interface ColumnProps {
    title: string
    content: string
  }
  
  const Column: React.FC<ColumnProps> = ({ title, content }) => (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold text-white">{title}</h3>
      <p className="text-slate-400">{content}</p>
    </div>
  )
  
  export default function ThreeColumnsSection() {
    const columns: ColumnProps[] = [
      {
        title: "Maecenas eleifend",
        content: "Curabitur sit amet lectus justo. Nullam accumsan velit quam, quis euismod dui sodales a. Proin non tincidunt neque."
      },
      {
        title: "Duis ac ipsum nulla",
        content: "Aliquam pretium enim odio dapibus, non imperdiet lorem euismod. Curabitur blandit urna ante, ac accumsan lorem aliquat."
      },
      {
        title: "Duis laoreet posuere",
        content: "Vivamus eros metus, vestibulum ut erat aliquam, pellentesque consectetur libero. Vestibulum laoreet dictum magna at suscipit."
      }
    ]
  
    return (
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {columns.map((column, index) => (
          <Column key={index} {...column} />
        ))}
      </div>
    )
  }