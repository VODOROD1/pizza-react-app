import React from 'react';

function Categories({categoryId, setCategoryId}) {
    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

    return (
        <div className="categories">
            <ul>
                {categories.map((category, index) => (
                    <li key={index} onClick={() => setCategoryId(index)} className={categoryId === index? 'active' : ''}>{category}</li>
                ))}
            </ul>
        </div>
    );
}

export default Categories;