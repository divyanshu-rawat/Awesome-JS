/**
 * strip tags
 * inspired by PHP strip_tags()
 * function to remove all HTML tags
 */   

function stripTags(html)
{
    if(!html || typeof html != 'string') return html
    return html.replace(/(<([^>]+)>)/ig,'')
}

const html = `
<div>
<h1>Title on Heading 1</h1>
<p>
<strong>You are</strong> so beautiful
</p>
</div>
`

console.log(stripTags(html))