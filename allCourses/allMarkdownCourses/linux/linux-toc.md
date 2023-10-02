

<!-- toc -->

- [Linux](#linux)
    + [Arch Linux, Ubuntu, Debian, and More](#arch-linux-ubuntu-debian-and-more)
  * [Basic usage x section](#basic-usage-x-section)
  * [Basic usage](#basic-usage)
  * [Advance usage](#advance-usage)
    + [Combination examples](#combination-examples)
  * [Bash programs](#bash-programs)
- [This is a comment](#this-is-a-comment)
- [If statement](#if-statement)
- [For loop](#for-loop)
- [While loop](#while-loop)
- [Check if an argument was provided](#check-if-an-argument-was-provided)
- [Check if the directory exists](#check-if-the-directory-exists)
- [Iterate over the files in the directory](#iterate-over-the-files-in-the-directory)

<!-- tocstop -->

end-toc
end-toc
end-toc
end-toc
end-toc
end-toc
<-- toc -->

\pagebreak

# Linux
Linux is a free and open-source operating system based on Unix. It was created by Linus Torvalds in 1991. Linux is built around the Linux kernel, which is the core part of the operating system that interacts with the hardware of the computer. On top of the kernel, there are various user space utilities, applications, and libraries that make up a complete operating system.

Linux is known for its flexibility, stability, and performance. It can be used on a wide range of devices, from servers and desktops to smartphones, embedded systems, and supercomputers. It is also the operating system that powers the majority of the world's web servers and supercomputers.

The key components of a Linux operating system include:

Kernel: The core part of the operating system that communicates with the hardware of the computer.
Shell: A command-line interface that allows users to interact with the operating system by typing commands.
User space: This includes all the programs, utilities, and libraries that are not part of the kernel.
Linux Distributions
A Linux distribution, or distro, is a packaged version of the Linux operating system that includes the Linux kernel, user space utilities, applications, and libraries. Distros are tailored to specific use cases and user preferences, offering different desktop environments, software repositories, and package management systems.

Some popular Linux distributions include:

Ubuntu: A user-friendly distribution based on Debian, ideal for beginners and general-purpose use.
Fedora: A distribution sponsored by Red Hat, focused on providing the latest open-source software and innovations.
Debian: A well-established, stable, and community-driven distribution that serves as the base for many other distros, including Ubuntu.
Arch Linux: A minimalist and highly customizable distribution aimed at experienced Linux users who want complete control over their system.
CentOS: A free and open-source alternative to Red Hat Enterprise Linux (RHEL), suitable for servers and enterprise environments.
Package Formats and Managers
Different Linux distributions use different package formats and package management systems to handle the installation, removal, and updating of software. Here are a few examples:

.deb (Debian, Ubuntu, and derivatives): Debian-based distributions use the .deb package format, and the package management tools include dpkg, apt-get, and apt.

.rpm (Fedora, CentOS, and derivatives): RPM-based distributions use the .rpm package format, and the package management tools include rpm, yum, and dnf.

Arch Linux (pacman): Arch Linux uses the pacman package manager to handle software installation, removal, and updates. It uses a simple, custom binary package format and has a rolling-release model.

### Arch Linux, Ubuntu, Debian, and More
To give you a sense of how these differences play out, let's compare a few distributions:

Arch Linux is designed for experienced users who want to build their system from the ground up. It uses a rolling-release model, so all software is continually updated. It uses the pacman package manager and has extensive documentation.

Ubuntu is user-friendly and designed for general desktop use. It has regular releases every six months with long-term support (LTS) releases every two years. Ubuntu uses the .deb package format with the apt package manager.

Debian is a community-driven project known for its stability. It serves as the base for many other distributions, including Ubuntu. Debian also uses the .deb package format.

Fedora is a community-supported project sponsored by Red Hat. It serves as a testing ground for new technologies that may eventually make their way into Red Hat Enterprise Linux. Fedora uses the .rpm package format with the dnf package manager.

CentOS is a free and open-source clone of Red Hat Enterprise Linux, designed for servers and enterprise use. It also uses the .rpm package format.

Each of these distributions has its own strengths and weaknesses, and the best one for you depends on your specific needs, experience level, and personal preferences.

## Basic usage x section
here are various categories of commands grouped by their utilities, along with detailed examples and parameter descriptions:

File and Directory Operations

ls: Lists the contents of a directory.
-l: long format, displaying additional file/directory details.
-a: shows hidden files.
Example: ls -la /home/user
cd: Changes the current directory.
Example: cd /home/user
cp: Copies files and directories.
-r: copies directories recursively.
-i: interactive mode, asks before overwriting files.
Example: cp -ri /source/directory /destination/directory
mv: Moves or renames files and directories.
-i: interactive mode, asks before overwriting files.
Example: mv -i /source/file /destination/file
rm: Removes files and directories.
-r: removes directories recursively.
-i: interactive mode, asks before deleting files.
Example: rm -ri /path/to/directory
find: Searches for files in a directory hierarchy.
-name: searches by filename.
-type: searches by file type.
Example: find / -name "*.txt"
File Permissions and Ownership

chmod: Changes the permissions of a file or directory.
u: user permissions.
g: group permissions.
o: other permissions.
+ or -: add or remove permissions.
rwx: read, write, and execute permissions.
Example: chmod u+rw,g+r,o-rwx /path/to/file
chown: Changes the owner of a file or directory.
-R: operates on files and directories recursively.
Example: chown -R username:groupname /path/to/directory
chgrp: Changes the group of a file or directory.
-R: operates on files and directories recursively.
Example: chgrp -R groupname /path/to/directory
Process Management

ps: Provides information about the currently running processes.
-aux: shows all processes with extra details.
Example: ps aux
top: Displays dynamic real-time information about running processes.
Example: top
kill: Sends a signal to a process, usually to terminate the process.
-9: sends the SIGKILL signal to force termination of the process.
Example: kill -9 [PID]
nice: Modifies the scheduling priority of a process.
Example: nice -n 10 ./executable
renice: Alters the priority of a running process.
Example: renice +10 -p [PID]
Networking

ping: Sends ICMP ECHO_REQUEST to network hosts.
Example: ping www.google.com
ifconfig: Displays or modifies the configuration of the network interfaces.
Example: ifconfig
netstat: Prints network connections, routing tables, interface statistics, etc.
-a: shows both listening and non-listening sockets.
Example: netstat -a
ssh: Logs into a remote machine and executes commands.
Example: ssh username@hostname
scp: Securely copies files between hosts on a network.
-r: copies




User
go on
ChatGPT
directories recursively.
- Example: scp -r username@source:/path/to/directory username@destination:/path/to/directory

Package Management

apt or apt-get: Handles packages in Debian based distributions (like Ubuntu).
install: installs a package.
remove: removes a package.
upgrade: upgrades all upgradable packages.
update: updates the list of available packages and their versions.
Example: sudo apt-get update && sudo apt-get upgrade
yum: Handles packages in older Red Hat based distributions.
The commands are similar to apt-get.
Example: sudo yum update && sudo yum upgrade
dnf: Handles packages in newer Red Hat based distributions, replacing yum.
The commands are similar to apt-get.
Example: sudo dnf update && sudo dnf upgrade
pacman: Handles packages in Arch Linux.
-Syu: synchronizes package databases and upgrades all packages.
Example: sudo pacman -Syu
Text Processing

cat: Concatenates and displays the content of files.
Example: cat filename
more or less: Views the content of files page by page.
Example: less filename
head: Outputs the first part of files.
-n: specifies the number of lines to output.
Example: head -n 10 filename
tail: Outputs the last part of files.
-n: specifies the number of lines to output.
Example: tail -n 10 filename
grep: Searches text using patterns.
-i: ignores case.
-r: searches recursively in directories.
-v: inverts the search, showing lines that don't match the pattern.
Example: grep -ir "pattern" /path/to/directory
awk: Processes text using a scripting language.
Example: awk '{print $1}' filename
sed: Streams editor for filtering and transforming text.
Example: sed 's/foo/bar/g' filename
Disk Usage

df: Reports file system disk space usage.
-h: displays sizes in human-readable format (e.g., KB, MB).
Example: df -h
du: Estimates file and directory space usage.
-sh: displays sizes in human-readable format and summarizes the result.
Example: du -sh /path/to/directory
System Information

uname: Prints system information.
-a: prints all system information.
Example: uname -a
hostname: Shows or sets the system's host name.
Example: hostname
uptime: Tells how long the system has been running.
Example: uptime
whoami: Prints the user name associated with the current effective user ID.
Example: whoami
Remember to use man command (e.g., man ls) to display the manual page of a command and learn more about its parameters and usage.





User
go on
ChatGPT
Archiving and Compression

tar: Archives files into a single file, and can also compress and extract files.

-c: creates a new archive.
-x: extracts files from an archive.
-z: compresses or decompresses the archive using gzip.
-f: specifies the archive file.
Example: tar -czf archive.tar.gz /path/to/directory (creates a gzipped tarball)
Example: tar -xzf archive.tar.gz (extracts a gzipped tarball)
gzip: Compresses files.

-d: decompresses files.
Example: gzip filename (creates filename.gz)
Example: gzip -d filename.gz (decompresses filename.gz)
bzip2: Compresses files using the Burrows–Wheeler algorithm.

-d: decompresses files.
Example: bzip2 filename (creates filename.bz2)
Example: bzip2 -d filename.bz2 (decompresses filename.bz2)
zip: Packages and compresses (archives) files.

-r: operates on directories recursively.
Example: zip -r archive.zip /path/to/directory
unzip: Extracts files from ZIP archives.

Example: unzip archive.zip
Text Editors

nano: An easy-to-use text editor in the terminal.

Example: nano filename
vi or vim: A widely-used, feature-rich text editor. vim is an improved version of vi.

Example: vim filename
emacs: A highly extensible text editor.

Example: emacs filename
Environment Variables

export: Sets the value of an environment variable.

Example: export VAR=value
unset: Unsets the value of an environment variable.

Example: unset VAR
env: Runs a program in a modified environment, or displays the current environment.

Example: env
Example: env VAR=value program
Job Control

&: Runs a command in the background.

Example: command &
jobs: Lists the jobs running in the background.

Example: jobs
fg: Brings a background job to the foreground.

Example: fg %1 (brings job 1 to the foreground)
bg: Continues a stopped job in the background.

Example: bg %1 (continues job 1 in the background)
ctrl+z: Stops the current job and puts it in the background.

ctrl+c: Interrupts the current job.

Searching

locate: Finds files by name.

Example: locate filename
which: Shows the full path of shell commands.

Example: which ls
type: Describes a command.

Example: type ls
whereis: Locates the binary, source, and manual page files for a command.

Example: whereis ls
Remember, most of these commands have numerous options and arguments that you can explore with the man command. For example, man ls will provide a manual page with detailed information about the ls command.

## Basic usage
let's delve into some of the commonly used commands in Ubuntu 22, including their arguments and advanced usage. After that, we'll explore how these commands can be combined for more advanced tasks.

ls: List directory contents.

Arguments: -l (long format), -a (show hidden files), -h (human readable sizes)
Example: ls -lah will show all files (including hidden), in long format, with human-readable sizes.
cd: Change directory.

Arguments: .. (parent directory), - (previous directory)
Example: cd - will take you to the previous directory.
pwd: Print working directory.

No arguments typically used.
Example: pwd will show your current directory.
touch: Create a new file.

Arguments: File name(s)
Example: touch newfile.txt will create a new file named "newfile.txt".
cp: Copy files and directories.

Arguments: -r (copy directories recursively), -p (preserve file attributes if possible)
Example: cp -rp dir1/ dir2/ will copy directory 'dir1' to 'dir2', preserving file attributes and copying sub-directories.
mv: Move or rename files.

Arguments: Source, Destination
Example: mv /path/to/source /path/to/destination will move the file/directory from source to destination.
rm: Remove files or directories.

Arguments: -r (remove directories and their contents recursively), -f (force removal without confirmation)
Example: rm -rf dir will remove 'dir' directory and its contents without asking for confirmation.
cat: Concatenate and display file content.

Arguments: File name(s)
Example: cat file1.txt file2.txt will output the contents of 'file1.txt' and 'file2.txt' to the terminal.
less: View file content with page navigation.

Arguments: File name
Example: less file.txt allows you to view and navigate through 'file.txt'.
grep: Search text using patterns.

Arguments: -i (ignore case), -r (recursively search directories), -l (only output filenames), 'pattern', 'file'
Example: grep -irl "example" . will recursively search the current directory (.) for the pattern "example", ignoring case, and return the names of files where the pattern is found.
sudo: Execute command as a super user.

Arguments: Command to execute
Example: sudo apt-get update executes the 'apt-get update' command with root privileges.
apt-get: APT package handling utility (legacy).

Arguments: install (install package), remove (remove package), update (update package list), upgrade (upgrade all upgradable packages)
Example: sudo apt-get install package_name installs a package.

find: Search for files in a directory hierarchy.

Example: find /home/user -name "*.txt" will find all .txt files in /home/user and its subdirectories.
Example: find / -type d -name "dirName" will search the entire file system for directories named "dirName".
man: Display manual pages.

Arguments: Command name
Example: man ls will display the manual page for the ls command.
echo: Display a line of text.

Arguments: -n (do not output the trailing newline), -e (enable interpretation of backslash escapes), string to be printed
Example: echo -n "Hello, world" will print "Hello, world" without a trailing newline.
chmod: Change file permissions.

Arguments: Permission settings (numeric or symbolic), file/directory
Example: chmod 755 file will set 'file' permissions to '755' (read, write, execute for owner, read and execute for group and others).
chown: Change file owner and group.

Arguments: owner[:group], file/directory
Example: chown user:group file will change the owner of 'file' to 'user' and the group to 'group'.
df: Report file system disk space usage.

Arguments: -h (human-readable)
Example: df -h will display disk usage in a human-readable format.
du: Estimate file and directory space usage.

Arguments: -h (human-readable), -s (summarize)
Example: du -sh /home/user will display the total disk usage of /home/user in a human-readable format.
ps: Report a snapshot of the current processes.

Arguments: -e (select all processes), -f (full format listing)
Example: ps -ef will display all the current processes in full format.
top: Display Linux processes.

No typical arguments.
Example: top will display an ongoing, updated list of all running processes.

## Advance usage

Piping (|): The pipe operator (|) in a command line is used for piping, where the output of one command is used as the input to another command. It's a form of redirection that is used in Linux and other Unix-like operating systems.

In your example, ls -l | grep "example", the ls -l command lists all files and directories in the current directory in long format. This output becomes the input for the grep "example" command. So, grep is searching the output of ls -l for the string "example". If found, it will display those lines on the terminal.

Redirect (> and >>): These are the redirection operators.

> is used to redirect the output of a command to a file, replacing the current content of the file. If the file does not exist, it creates one.
In the example ls -l > files.txt, the ls -l command lists all files and directories in the current directory in long format. Instead of displaying this output on the terminal, it is written to the file "files.txt". If "files.txt" already exists, its content is replaced; if not, a new file is created.

>> is also a redirection operator, but instead of replacing the content of the file, it appends the output of a command to the end of the file.
Example: ls -l >> files.txt, will append the output of ls -l to the end of "files.txt".

Command substitution ($(command) or `command`): Command substitution is used to use the output of a command as an argument to another command. It substitutes the command enclosed between $() or backticks with its output.

In the example echo "Today is $(date)", $(date) is replaced with the output of the date command. So the echo command ends up printing "Today is " followed by the current date.

Chaining commands (&& or ;): These are command separators and allow you to execute multiple commands in a single line.

&& runs the second command only if the first command completes successfully (i.e., returns a zero exit status). If the first command fails (returns a non-zero status), the second command won't be executed.
In the example cd /usr/local && ls, ls will be executed only if cd /usr/local is successful.

; runs the second command regardless of whether the first command succeeds or fails.
Example: cd /usr/local ; ls - even if cd /usr/local fails (say, the directory doesn't exist), ls will still be executed in the current directory.

### Combination examples
Finding and archiving files: Find files of a specific type in a directory and then archive them using tar.

Example: find /home/user/Documents -name "*.txt" | tar -czvf textfiles.tar.gz -T - This will find all .txt files in /home/user/Documents, and tar will archive these into 'textfiles.tar.gz'.
Monitoring system logs: Tail the syslog and grep for a specific pattern.

Example: tail -f /var/log/syslog | grep "sshd" This will continuously monitor the syslog and display lines containing "sshd".
Counting number of lines/words/characters: Use wc (word, line, character, and byte count) in conjunction with other commands to count number of lines, words, or characters.

Example: ls -l | wc -l This command will count the number of files in the current directory.
Checking disk usage: Use du and sort to list directories based on their disk usage.

Example: du -sh * | sort -hr This will display directories sorted by their disk usage in a human-readable format.
Running multiple commands sequentially: You can run multiple commands sequentially, with each command running only if the previous command succeeded, using &&.

Example: cd /usr/local/src && tar xvf file.tar && ./configure && make && sudo make install This sequence of commands navigates to the directory, extracts an archive, configures the build, compiles the code, and then installs the application (each step only proceeds if the previous was successful).
Finding top memory consuming processes: Use ps, sort, and head to list the top memory consuming processes.

Example: ps aux --sort=-%mem | head This will display the top 10 memory-consuming processes on your system.
Creating a compressed backup of a directory: This combines the tar and gzip commands to create a compressed backup.

Example: tar cvf - /path/to/dir | gzip > backup.tar.gz This creates a compressed backup of /path/to/dir.

## Bash programs

Bash (Bourne Again SHell) is a scripting language and the default command-line interpreter for most Linux distributions. It provides the ability to write scripts, which are collections of commands that can be executed as a program. This makes it ideal for automating repetitive tasks.

Bash Script Basics
Shebang (#!): Every bash script should start with a shebang (#!) followed by the path to the shell. This tells the system that this file is a shell script and it should be executed with the specified shell. For bash scripts, this line is typically:

bash
Copy code
#!/bin/bash
Comments: Anything following a # (with the exception of the shebang) is considered a comment and won't be executed.

bash
Copy code
# This is a comment
Variables: Variables in bash are declared without a $, but are accessed with a $.

bash
Copy code
variable="Hello, world"
echo $variable
Command execution: Bash commands can be executed directly in the script.

bash
Copy code
ls -l
Control Flow (if, for, while): Bash scripts support common control flow structures like if, for, and while.

bash
Copy code
# If statement
if [ "$variable" = "Hello, world" ]; then
    echo "Variable is Hello, world"
fi

# For loop
for i in 1 2 3; do
    echo $i
done

# While loop
count=0
while [ $count -lt 3 ]; do
    echo $count
    count=$((count+1))
done
Functions: Functions can be declared and used within a script.

bash
Copy code
function say_hello() {
    echo "Hello, $1"
}

say_hello "world"
Command-line Arguments: Command-line arguments can be accessed with $1, $2, etc. $0 is the script's name. $@ refers to all arguments and $# gives the number of arguments.

bash
Copy code
echo "Script name: $0"
echo "First argument: $1"
echo "All arguments: $@"
echo "Number of arguments: $#"
Exit Status: Every command returns an exit status. A status of 0 indicates success, anything else indicates failure. The exit status of the last command is stored in $?.

bash
Copy code
ls /nonexistentdirectory
echo "Exit status: $?"
Executing the Script: Save the script with a .sh extension (though not mandatory), give it execute permissions with chmod +x script.sh, and run it with ./script.sh.

 let's create a script that iterates over all the files in a directory and displays the file name and its size in a human-readable format. This script will also check if the provided directory exists.

bash
Copy code
#!/bin/bash

# Check if an argument was provided
if [ $# -eq 0 ]; then
    echo "Usage: $0 directory"
    exit 1
fi

# Check if the directory exists
if [ ! -d $1 ]; then
    echo "Directory $1 does not exist"
    exit 1
fi

# Iterate over the files in the directory
for file in $1/*; do
    # Check if it is a file (not a directory)
    if [ -f "$file" ]; then
        # Display the file name and its size
        echo "File: $file"
        echo "Size: $(du -sh $file | cut -f1)"
    fi
done
Here's how this script works:

The script first checks if a command-line argument was provided. If not, it prints a usage message and exits with a status of 1 (indicating failure).
It then checks if the provided argument is a directory. If not, it prints a message and again exits with a status of 1.
If the provided argument is a directory, it then iterates over all the files in the directory using a for loop. The $1/* means every file in the directory provided as the first argument.
For each file, it first checks if the file is indeed a file and not a directory using the -f option in the if condition. If it's a file, it then prints the file name and its size. The size is obtained using du -sh $file, which gives the disk usage in human-readable format. The cut -f1 is used to only display the size part of the du output.
Remember to give the script execute permissions (chmod +x script.sh) and run it with ./script.sh /path/to/directory
