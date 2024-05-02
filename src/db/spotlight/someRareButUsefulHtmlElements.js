
export default {
  title: "SOME RARE BUT USEFUL HTML ELEMENTS",
  html: `<section>
  <style>
  code {
  background: hsl(233,8%,90%);
  border-radius: 4px;
  padding: 1px 4px;
  font-size: 16px;
  font-family: 'Courier New';
  }
  h2 {
  font-size: 24px;
  font-weight: bold;
  color: #00bdd6;
  }
  .snippet-con {
  margin: 5px 0;
  border-radius: 8px;
  overflow: hidden;
  }
  .h {
  color: hsl(233,8%,79%);
  padding: 1px 10px;
  background-color: #61646b;
  font-size: 15px;
  }
  .code-snippet {
  color: white;
  background-color: #202938;
  overflow: scroll;
  padding: 15px 5px;
  font-size: 15px;
  font-weight: bold;
  font-family: 'Courier New';
  }
  .comment {
  color: rgba(173,173,173,.6);
  }
  .indent{
  text-indent: 16px;
  }
  </style>
  <p><abbr title="HyperText Markup Language">HTML</abbr> is the backbone of the web, providing web pages with structure and content. Most developers are familiar with common HTML elements like <code>&lt;div&gt;</code>, <code>&lt;p&gt;</code> and <code>&lt;section&gt;</code>, there are several lesser-known HTML elements that offer unique functionality and can greatly enhance user experience and optimize your site for search engines.<br />
  In this article, we will explore a few of these rare elements, their functionalities, practical applications in web development and their limitations or compatibility issues.</p><br/><br />


  <h2>1. &lt;base&gt;</h2>
  <p class="indent">The <code>&lt;base&gt;</code> element sets the base <abbr title="Uniform Resource Locator">URL</abbr> for all relative URLs within an HTML document.
  It provides a reference point for the browser when resolving relative URLs  within the document. The perfect place to include the <code>&lt;base&gt;</code> element is in the <code>&lt;head&gt;</code> section of the document. Only one <code>&lt;base&gt;</code> element is permitted per document. It is supported by all major browsers.</p>
<div class="snippet-con">
<h3 class="h">html snippet</h3>
<pre class="code-snippet">
  &lt;head&gt;
    &lt;meta charset="utf-8" &gt;
    &lt;title&gt; Demo &lt;&frasl;title&gt;
    &lt;base href="https://yourBaseURL" target="_blank" &gt;
  &lt;&frasl;head&gt;
</pre>
</div>
<p>If there is a hyperlink with a relative URL like <code>&lt;a href="page.html"&gt;</code>, the browser will interpret it as https://yourBaseUrl/page.html.</p><br/><br/>


<h2>2. &lt;details&gt; and &lt;summary&gt;</h2>
<p class="indent"> The <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements are used together to create collapsible sections of content, mostly used for showing additional information that can be toggled open or closed. 
The <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> elements are useful for creating interactive and space-efficient user interfaces, such as collapsible sections in FAQs.
They provide a clean and accessible way to present supplementary information without cluttering the page.
</p>
<div class="snippet-con">
<h3 class="h">html snippet</h3>
<pre class="code-snippet">
  &lt;details&gt;
    &lt;summary&gt; Click to see more info &lt;&frasl;summary&gt;
    &lt;p&gt; Additional information &lt;&frasl;p&gt;
  &lt;&frasl;details&gt;	
</pre>
</div>
<p>They are supported by all major browsers.</p>
<br/><br/>

<h2>3. &lt;dialog&gt;</h2>
<p class="indent"> The <code>&lt;dialog&gt;</code> element is used to create a modal or non-modal dialog box. <br/>
Modal dialog boxes prevent interaction with the rest of the page while  non-modal dialog boxes allow interaction with the rest of the page.</p>
<div class="snippet-con">
<h3 class="h">html snippet</h3>
<pre class="code-snippet">
 &lt;button id="showbtn" &gt; show dialog &lt;&frasl;button&gt;
 &lt;dialog id="mydialog" &gt;
  &lt;p&gt; This is my dialog content &lt;&frasl;p&gt;
  &lt;button id="closebtn"&gt; Close &lt;&frasl;button&gt;
 &lt;&frasl;dialog&gt;

 &lt;script&gt;
 <p class="comment"> //script to control the dialog</p>
  const mydialog =  document.getElementById("mydialog");
  const showbtn =  document.getElementById("showbtn");
  const closebtn =  document.getElementById("closebtn");
  closebtn.onclick = (event)=>{

    mydialog.close();
  }

  showbtn.onclick = (event)=>{
    mydialog.showModal();<span class="comment">//modal mode</span>
    <span class="comment">
    /*
    mydialog.show();<span class="comment">//non-modal mode</span>
    */
    </span>
  }
 &lt;&frasl;script&gt;
</pre>
<p> This feature is supported by all latest devices and browsers versions but might not work in older devices or browser versions.</p><br/><br/>

<h2>4. &lt;dl&gt; , &lt;dt&gt; and &lt;dd&gt;</h2>
<p class="indent">
  The <code>&lt;dl&gt;</code> is used, together with <code>&lt;dt&gt;</code> and <code>&lt;dd&gt;</code>, to represent a  description list. The <code>&lt;dt&gt;</code> HTML element  marks the term to be describe and <code>&lt;dd&gt;</code> to provide the description.
</p>
<div class="snippet-con">
<h3 class="h">html snippet</h3>
<pre class="code-snippet">
 &lt;dl&gt;
  &lt;dt&gt; Conglomeration: &lt;&frasl;dt&gt;
  &lt;dd&gt; That which consist of many previously separate parts &lt;&frasl;dd&gt;
  &lt;dt&gt; Declension: &lt;&frasl;dt&gt;
  &lt;dd&gt; A falling off, decay or descent &lt;&frasl;dd&gt;
 &lt;&frasl;dl&gt;
</pre>
</div>
<p> It is support by all modern browsers and devices</p><br /><br />

<h2>5. &lt;datalist&gt; </h2>
<p class="indent">The  <code>&lt;datalist&gt;</code> HTML element is used to associate a list of pre-defined options with an <code>&lt;input&gt;</code> element.<br/>The <code>&lt;datalist&gt;</code> to provides an "autocomplete" feature for <code>&lt;input&gt;</code> elements. Users will see a drop-down list of pre-defined options as they input data. <br/>
The <code>list</code> attribute of the <code>&lt;input&gt;</code> is set to the <code>id</code> of the connected <code>&lt;datalist&gt;</code> element. </p>
<div class="snippet-con">
<h3 class="h"> html snippet</h3>
<pre class="code-snippet">
  &lt;label for="proglang" &gt;Choose programming language &lt;&frasl;label&gt;
  &lt;input  id="proglang" list="proglangs" name="proglang" &gt;
  &lt;datalist id="proglangs" &gt;
    &lt;option value="Java"&gt;  &lt;&frasl;option&gt;
    &lt;option value="Rust"&gt; &lt;&frasl;option&gt;
    &lt;option value="Python"&gt; &lt;&frasl;option&gt;
    &lt;option value="JavaScript"&gt;  &lt;&frasl;option&gt;
  &lt;&frasl;datalist&gt;
</pre>
</div>
<p>The <code>&lt;datalist&gt;</code> is fully supported by the latest versions of all modern browsers except Firefox where it is only partially supported.</p>

  </section>`,
  bait: `Most developers are familiar with common HTML elements like <div>, <p> and <section>, there are several lesser-known HTML elements that offer unique functionality and can greatly enhance user experience and optimize your site for search engines.
  In this article, we will explore a few of these rare elements, their ...`,
  pidginAvail: false,
  pubdate: "Sun, 14 April, 2024",
  author: "John Sunday",
}
