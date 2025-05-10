import Image from "next/image";

export default function HomePage() {
  return (
    <main>
      <header className="mb-12 text-center">
        <h1 className="notion-style-h1">Welcome to the MCP Beginner's Guide</h1>
        <p className="notion-style-p text-lg text-gray-600">Unlock the power of AI by understanding MCP and how to use it with Claude Desktop</p>
      </header>

      {/* Module 1: Introduction to MCP */}
      <section id="module1">
        <h2 className="notion-style-h2">Module 1: Introduction to Model Context Protocol</h2>

        <article id="lesson1_1">
          <h3 className="notion-style-h3">Lesson 1.1: What is an AI Model and What is "Context"?</h3>
          <p className="notion-style-p">Imagine you have a brilliant assistant. This assistant is incredibly smart and can write, summarize, and even brainstorm ideas. However, to do their job effectively, they need the right information and tools for the specific task at hand. If they can't access your files, the internet, or other applications, their usefulness is limited. AI models, like Claude, are similar to this brilliant assistant.</p>
          <p className="notion-style-p">An <strong>AI model</strong> is a sophisticated program trained on vast amounts of data to understand and generate human-like text, images, or other content. "Context" in AI refers to the information an AI model has available to understand and respond to your requests. This includes your prompt, previous parts of the conversation, and any additional data or capabilities it can access. Without sufficient context or access to external tools, even the most advanced AI model operates with limitations.</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_1_1_ai_context_bubble.png" alt="AI Model and Context Bubble" width={500} height={300} className="notion-style-img" />
          </div>
        </article>

        <article id="lesson1_2">
          <h3 className="notion-style-h3">Lesson 1.2: Introducing Model Context Protocol</h3>
          <p className="notion-style-p">So, how do we give our AI assistant the tools and access it needs? This is where the <strong>Model Context Protocol (MCP)</strong> comes in. Think of MCP as a universal language or a set of rules that allows AI models (like Claude) to communicate and interact with various external tools and data sources in a standardized way.</p>
          <p className="notion-style-p">MCP was created to address the need for AI models to go beyond their pre-trained knowledge and perform actions in the digital world. It acts like a universal adapter, enabling an AI to connect to different "servers" that offer specific capabilities – such as accessing your file system, searching the web, managing your calendar, or interacting with other applications.</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_1_2_mcp_overview.png" alt="MCP Overview Diagram" width={600} height={400} className="notion-style-img" />
          </div>
        </article>

        <article id="lesson1_3">
          <h3 className="notion-style-h3">Lesson 1.3: Why MCP Matters - The Benefits</h3>
          <p className="notion-style-p">MCP is a game-changer because it transforms AI models from being just sophisticated chatbots into powerful <strong>AI agents</strong> that can perform tasks and automate workflows. Here are some key benefits:</p>
          <ul className="notion-style-ul">
            <li className="notion-style-li"><strong>Empowering AIs:</strong> MCP allows AIs to interact with the world, access real-time information, and use tools, significantly expanding their capabilities.</li>
            <li className="notion-style-li"><strong>Automation:</strong> Repetitive or complex digital tasks can be delegated to MCP-enabled AIs, freeing up your time for more strategic work.</li>
            <li className="notion-style-li"><strong>Increased Productivity:</strong> By handling tasks like file organization, research, or data entry, MCP helps you become more efficient.</li>
            <li className="notion-style-li"><strong>Security and Control:</strong> MCP implementations, like the one in Claude Desktop, often include permission models. This means the AI will ask for your approval before performing actions, ensuring you remain in control.</li>
          </ul>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_1_3_before_after_mcp.png" alt="Before and After MCP Diagram" width={700} height={350} className="notion-style-img" />
          </div>
        </article>

        <article id="lesson1_4">
          <h3 className="notion-style-h3">Lesson 1.4: How MCP Works - The Core Concepts (Simplified)</h3>
          <p className="notion-style-p">Conceptually, MCP involves a few key ideas:</p>
          <ul className="notion-style-ul">
            <li className="notion-style-li"><strong>Clients and Servers:</strong> The AI model (e.g., Claude Desktop) acts as a "client." It wants to use a tool. The tool itself, or the software that makes the tool available, acts as a "server." For example, a Filesystem Server allows Claude to interact with your files.</li>
            <li className="notion-style-li"><strong>Discoverability:</strong> The MCP client (Claude) needs to know what tools (servers) are available and what they can do. MCP provides a way for servers to announce their capabilities.</li>
            <li className="notion-style-li"><strong>Tool Invocation:</strong> When you ask the AI to do something that requires a tool, the AI (client) sends a request to the appropriate tool (server) using MCP. The server performs the action and sends a result back to the AI.</li>
            <li className="notion-style-li"><strong>User Interaction:</strong> The AI then uses this result to respond to you or to inform its next steps. Often, especially for actions that modify data or systems, the AI will ask for your explicit permission before invoking the tool.</li>
          </ul>
          <p className="notion-style-p">Think of it like ordering food at a restaurant: You (User) tell the waiter (AI Model/Client) what you want. The waiter checks the menu (Discoverable Tools via MCP) and tells the kitchen (Tool/Server). The kitchen prepares the food (Performs Action) and gives it to the waiter, who then brings it to you (User Response).</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_1_4_mcp_flow.png" alt="MCP Request Flow Diagram" width={600} height={400} className="notion-style-img" />
          </div>
          <h4 className="text-lg font-semibold mt-6 mb-2 text-gray-700">Video Introduction to MCP with Claude:</h4>
          <p className="notion-style-p">This video by Grace Leung provides an excellent overview of MCP and its potential with Claude. It's a great starting point for understanding the practical implications.</p>
          <div className="my-6 aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.youtube.com/embed/p0pR_zq-85M" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              className="w-full h-full rounded-lg shadow-md"
            ></iframe>
          </div>
        </article>
      </section>

      {/* Module 2: MCP in Action - Setting up Claude Desktop */}
      <section id="module2">
        <h2 className="notion-style-h2">Module 2: MCP in Action - Setting up Claude Desktop</h2>
        <article id="lesson2_1">
          <h3 className="notion-style-h3">Lesson 2.1: Introducing Claude Desktop as an MCP Client</h3>
          <p className="notion-style-p">Claude Desktop is a powerful application that brings the capabilities of the Claude AI model directly to your computer. One of its key features is its ability to act as an MCP client. This means you can extend Claude Desktop's functionality by connecting it to various MCP servers, allowing it to interact with your local system and other services in ways a standard web-based chatbot cannot.</p>
        </article>

        <article id="lesson2_2">
          <h3 className="notion-style-h3">Lesson 2.2: Quick Start - Setting up Your First MCP Server (Filesystem Server)</h3>
          <p className="notion-style-p">Let's get hands-on! We'll walk through setting up the official Filesystem MCP Server with your Claude Desktop application. This server will allow Claude to read from your computer’s file system, write new files, move files, and even search files, all with your permission.</p>
          <p className="notion-style-p"><strong>Prerequisites:</strong></p>
          <ul className="notion-style-ul">
            <li className="notion-style-li"><strong>Claude for Desktop:</strong> Download and install the latest version for macOS or Windows from the official source. (Linux is not yet supported for Claude for Desktop itself, though MCP servers can run on Linux).</li>
            <li className="notion-style-li"><strong>Node.js:</strong> This is required to run the Filesystem MCP server. You can download it from <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer" className="notion-style-nav">nodejs.org</a>. To check if you have it, open your Terminal (macOS) or Command Prompt (Windows) and type <code>node -v</code>. If you see a version number, you're good to go.</li>
          </ul>
          <p className="notion-style-p"><strong>Step-by-Step Guide (based on official <a href="https://modelcontextprotocol.io/quickstart/user" target="_blank" rel="noopener noreferrer" className="notion-style-nav">MCP Quickstart for Claude Desktop Users</a>):</strong></p>
          <ol className="list-decimal list-inside mb-4 pl-4 space-y-2">
            <li><strong>Open Claude Desktop Settings:</strong> In the Claude Desktop application, find the main application menu (usually at the top of your screen on macOS, or within the app window on Windows). Select "Settings…" (Note: these are not the Claude Account Settings found in the main chat window).</li>
            <li><strong>Navigate to Developer Configuration:</strong> In the Settings pane, click on "Developer" in the left-hand sidebar, and then click the "Edit Config" button.</li>
            <li><strong>Edit Configuration File:</strong> This will create a configuration file if you don’t already have one and open it (or reveal it in your file system). The file paths are typically:
              <ul className="notion-style-ul pl-6">
                <li>macOS: <code>~/Library/Application Support/Claude/claude_desktop_config.json</code></li>
                <li>Windows: <code>%APPDATA%\Claude\claude_desktop_config.json</code></li>
              </ul>
              Open this <code>claude_desktop_config.json</code> file in a text editor. Replace its entire contents with the following: 
              <pre className="notion-style-code bg-gray-100 p-3 rounded my-2 overflow-x-auto">
                <code>
{`{
  "mcp_servers": [
    {
      "name": "filesystem",
      "command": [
        "npx",
        "-y",
        "@modelcontextprotocol/server-filesystem@latest",
        "--port",
        "0",
        "--allowed-paths",
        "/Users/your_username/Desktop",
        "/Users/your_username/Downloads"
      ],
      "request_timeout_ms": 10000,
      "startup_timeout_ms": 30000
    }
  ]
}`}
                </code>
              </pre>
              <p className="notion-style-p mt-2"><strong>Important:</strong> Replace <code>~/Desktop</code> and <code>~/Downloads</code> with the actual paths you want Claude to access. For Windows, paths look like <code>C:\\Users\\your_username\\Desktop</code> (note the double backslashes). Ensure these directories exist.</p>
            </li>
            <li><strong>Understanding the Configuration:</strong> This JSON file tells Claude Desktop which MCP servers to start. We've added one named "filesystem" that uses `npx` (a Node.js package runner) to download and run the `@modelcontextprotocol/server-filesystem`. The `--allowed-paths` argument specifies which directories this server (and thus Claude) can access.</li>
            <li><strong>Restart Claude Desktop:</strong> Close and reopen the Claude Desktop application for the changes to take effect.</li>
            <li><strong>Verify Installation:</strong> Upon restarting, you should see a small hammer icon  displayed in the bottom right corner of the chat input box. Clicking this hammer icon should reveal the tools provided by the Filesystem MCP Server (e.g., `readFile`, `writeFile`, `listFiles`).</li>
          </ol>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_2_2_claude_config.png" alt="Claude Desktop MCP Configuration" width={700} height={350} className="notion-style-img" />
          </div>
          <p className="notion-style-p">If you encounter issues, refer to the troubleshooting section in the official MCP documentation.</p>
        </article>

        <article id="lesson2_3">
          <h3 className="notion-style-h3">Lesson 2.3: Understanding the Filesystem Server</h3>
          <p className="notion-style-p">The Filesystem Server you just configured gives Claude specific abilities related to your computer's files:</p>
          <ul className="notion-style-ul">
            <li className="notion-style-li"><strong>Reading Files:</strong> Claude can read the content of files in the allowed directories.</li>
            <li className="notion-style-li"><strong>Writing Files:</strong> Claude can create new files or overwrite existing ones (with your permission).</li>
            <li className="notion-style-li"><strong>Listing Directories:</strong> Claude can list the files and folders within the allowed directories.</li>
            <li className="notion-style-li"><strong>Moving/Searching Files:</strong> Depending on the server version and its capabilities, it might also support moving or searching for files.</li>
          </ul>
          <p className="notion-style-p"><strong>Crucially, Claude will always ask for your permission before performing any action that modifies your file system.</strong> This ensures you have full control and transparency.</p>
        </article>
      </section>

      {/* Module 3: Your First MCP-Powered Projects */}
      <section id="module3">
        <h2 className="notion-style-h2">Module 3: Your First MCP-Powered Projects with Claude</h2>
        <p className="notion-style-p">Now that you have the Filesystem MCP Server running with Claude Desktop, let's try out some simple projects to see it in action!</p>

        <article id="project1">
          <h3 className="notion-style-h3">Project 1: The Automated File Butler</h3>
          <p className="notion-style-p"><strong>Goal:</strong> Use Claude to find, organize, and move files on your computer.</p>
          <p className="notion-style-p"><strong>Scenario:</strong> Your Desktop is cluttered with image files, and you want to organize them into a new folder.</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_3_1_project1_flowchart.png" alt="Project 1 Flowchart" width={600} height={700} className="notion-style-img" />
          </div>
          <p className="notion-style-p"><strong>Steps:</strong></p>
          <ol className="list-decimal list-inside mb-4 pl-4 space-y-2">
            <li><strong>Prepare (Optional):</strong> Create a few dummy image files (e.g., <code>image1.png</code>, <code>photoA.jpg</code>) on your Desktop.</li>
            <li><strong>Ask Claude to List:</strong> Prompt Claude: "Claude, can you show me a list of all the PNG and JPG files on my Desktop?" Approve permission when asked.</li>
            <li><strong>Ask Claude to Create Folder:</strong> Prompt: "Thanks, Claude. Now, please create a new folder on my Desktop called 'My Organized Pictures'." Approve permission.</li>
            <li><strong>Ask Claude to Move Files:</strong> Prompt: "Great! Now, can you please move all the .png files and .jpg files from my Desktop into the 'My Organized Pictures' folder?" Approve permission(s).</li>
            <li><strong>Verify:</strong> Check your Desktop and the new folder to see the results.</li>
          </ol>
          <p className="notion-style-p">This project demonstrates how Claude, using MCP, can automate tedious file management tasks through simple conversation.</p>
        </article>

        <article id="project2">
          <h3 className="notion-style-h3">Project 2: Quick Meeting Summarizer</h3>
          <p className="notion-style-p"><strong>Goal:</strong> Use Claude to process text from a file and save a summary to a new file.</p>
          <p className="notion-style-p"><strong>Scenario:</strong> You have a text file with raw meeting notes and want Claude to summarize key points and action items.</p>
          <div className="my-6 flex justify-center">
            <Image src="/images/visual_3_2_project2_flowchart.png" alt="Project 2 Flowchart" width={400} height={700} className="notion-style-img" />
          </div>
          <p className="notion-style-p"><strong>Steps:</strong></p>
          <ol className="list-decimal list-inside mb-4 pl-4 space-y-2">
            <li><strong>Prepare Notes File:</strong> Create <code>meeting_notes.txt</code> on your Desktop with sample notes (discussion points, action items).</li>
            <li><strong>Ask Claude to Read & Summarize:</strong> Prompt: "Claude, I have a file named <code>meeting_notes.txt</code> on my Desktop. Can you please read it, summarize the main discussion points, and list the action items?" Approve permission to read the file.</li>
            <li><strong>Ask Claude to Save Summary:</strong> Prompt: "That's a great summary! Can you please save this summary and the action items into a new file on my Desktop called <code>meeting_summary_YYYY-MM-DD.txt</code> (use today's date)?" Approve permission to write the file.</li>
            <li><strong>Verify:</strong> Check your Desktop for the new summary file and its contents.</li>
          </ol>
          <p className="notion-style-p">This project shows how MCP enables Claude to work with your local data to perform useful information processing tasks.</p>
        </article>
      </section>

      {/* Module 4: Expanding Your MCP Horizons */}
      <section id="module4">
        <h2 className="notion-style-h2">Module 4: Expanding Your MCP Horizons</h2>
        <article id="lesson4_1">
          <h3 className="notion-style-h3">Lesson 4.1: The World of MCP Servers</h3>
          <p className="notion-style-p">The Filesystem Server is just one example. The Model Context Protocol is designed to be extensible. Developers can create MCP servers for a wide variety of tools and services, such as:</p>
          <ul className="notion-style-ul">
            <li className="notion-style-li">Calendar management</li>
            <li className="notion-style-li">Email clients</li>
            <li className="notion-style-li">Specific web APIs (e.g., weather, stocks, project management tools)</li>
            <li className="notion-style-li">Database interaction</li>
            <li className="notion-style-li">And much more!</li>
          </ul>
          <p className="notion-style-p">You can explore more example servers and the MCP specification at the official <a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer" className="notion-style-nav">MCP GitHub repository</a> and the <a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="notion-style-nav">Model Context Protocol website</a>.</p>
          <p className="notion-style-p">Adding new servers to Claude Desktop typically involves updating the <code>claude_desktop_config.json</code> file with the new server's details, similar to how you added the Filesystem Server.</p>
        </article>

        <article id="lesson4_2">
          <h3 className="notion-style-h3">Lesson 4.2: The Future of MCP and AI Agents</h3>
          <p className="notion-style-p">MCP represents a significant step towards more capable and integrated AI agents. As more tools and services become accessible via MCP, AI assistants like Claude will become even more powerful partners in your daily digital life, capable of understanding your needs more deeply and taking a wider range of actions on your behalf (always with your permission and control).</p>
          <p className="notion-style-p">Imagine an AI that can not only draft an email but also schedule the follow-up meeting in your calendar and attach the relevant files from your computer, all from a single conversational request. This is the direction that protocols like MCP are paving.</p>
        </article>

        <article id="lesson4_3">
          <h3 className="notion-style-h3">Lesson 4.3: Resources and Next Steps</h3>
          <p className="notion-style-p">Congratulations on completing this beginner's course on MCP!</p>
          <p className="notion-style-p"><strong>Key Resources:</strong></p>
          <ul className="notion-style-ul">
            <li className="notion-style-li"><a href="https://modelcontextprotocol.io" target="_blank" rel="noopener noreferrer" className="notion-style-nav">Official Model Context Protocol Website</a> - For documentation, specifications, and news.</li>
            <li className="notion-style-li"><a href="https://modelcontextprotocol.io/quickstart/user" target="_blank" rel="noopener noreferrer" className="notion-style-nav">MCP Quickstart for Claude Desktop Users</a> - The guide we followed.</li>
            <li className="notion-style-li"><a href="https://github.com/modelcontextprotocol" target="_blank" rel="noopener noreferrer" className="notion-style-nav">MCP GitHub Repository</a> - For server examples and community contributions.</li>
            <li className="notion-style-li">The YouTube video by Grace Leung: <a href="https://www.youtube.com/watch?v=p0pR_zq-85M" target="_blank" rel="noopener noreferrer" className="notion-style-nav">Turn Claude to Powerful AI Agents</a></li>
          </ul>
          <p className="notion-style-p"><strong>Next Steps:</strong></p>
          <ul className="notion-style-ul">
            <li className="notion-style-li">Experiment further with the Filesystem server. Try different prompts and tasks.</li>
            <li className="notion-style-li">Explore the MCP GitHub for other servers you might find useful (be mindful of security and only use trusted servers).</li>
            <li className="notion-style-li">Stay updated on MCP developments as the ecosystem grows.</li>
          </ul>
          <p className="notion-style-p">We hope this course has provided you with a solid foundation to understand and utilize the Model Context Protocol. Happy automating!</p>
        </article>
      </section>

      <footer className="mt-12 pt-8 border-t border-accent text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} MCP Beginner's Course. Created by Manus.</p>
      </footer>
    </main>
  );
}

