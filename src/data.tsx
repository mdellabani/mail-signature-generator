import {generalData, contactData} from './dataDef';
import React, {useState} from 'react';

export function General() {
  return (
    <div className="flex flex-col gap-4 p-4">
      General
      {/* label todo */}
      {generalData.map(data => (
        <div key={data} className="input">
          <label className="input-label">{data}</label>
          <input
            // className="border-solid border-2 border-gray-500 hover:border-black focus:border-black rounded-full pl-[14px]"
            className="input-item"
            type="text"
            placeholder={data}
          ></input>
        </div>
      ))}
    </div>
  );
}

export function Contacts() {
  const [showList, setShowList] = useState<boolean>(false);
  const [addedFields, setAddedFields] = useState<string[]>([]);
  const [fieldList, setFieldList] = useState<string[]>(contactData);

  const toggleList = () => {
    setShowList(prevShowList => !prevShowList);
  };

  const addField = (field: string) => {
    setAddedFields(prevFields => [...prevFields, field]);
    setFieldList(prevFields => prevFields.filter(f => f !== field));
  };

  const removeField = (field: string) => {
    setAddedFields(prevFields => prevFields.filter(f => f !== field));
    setFieldList(prevFields => [...prevFields, field]);
  };

  return (
    <div>
      <button
        onClick={toggleList}
        className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Add Field
      </button>
      {showList && (
        <>
          <ul>
            {fieldList.map(field => (
              <li key={field} onClick={() => addField(field)}>
                {field}
              </li>
            ))}
          </ul>
        </>
      )}
      <ul>
        {addedFields.map(field => (
          <li key={field} className="flex items-center mb-2">
            {field}{' '}
            <span
              className="cursor-pointer remove-icon ml-2 text-red-600"
              onClick={() => removeField(field)}
              title="Remove"
            >
              &#10006;
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
