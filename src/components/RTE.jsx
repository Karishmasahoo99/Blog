import React from 'react'
import { Editor } from '@tinymce/tinymce-react'
import { Controller } from 'react-hook-form'
import conf from '../conf/conf'

function RTE({name, control, label, defaultValue=""}) {
  return (
    <div className="w-full">
        {
            label &&
            <label className='inline-block pl-1 font-bold uppercase text-xl mb-2'>{label}</label>
        }
        <Controller name={name || "content"}
        control={control}
        defaultValue={defaultValue}
        render={({field:{onChange, value}})=>
            <Editor
                value={value}
                apiKey={conf.tinyApiKey}
                init={{
                    height: 500,
                    menubar: true,
                    plugins: [
                        "advlist", "autolink", "lists", "link", "image", "charmap",
                        "preview", "anchor", "searchreplace", "visualblocks", "code",
                        "fullscreen", "insertdatetime", "media", "table", "code", "help",
                        "wordcount"
                    ],
                    toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
                    content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
                }}
                onEditorChange={onChange}
            />
            }
        />

    </div>
  )
}

export default RTE