

<!-- toc -->

- [VIM](#vim)
  * [From Normal Mode](#from-normal-mode)
  * [Basic Movement](#basic-movement)
  * [Editing](#editing)
  * [Exiting](#exiting)
  * [Searching and Replacing](#searching-and-replacing)
  * [Miscellaneous](#miscellaneous)
  * 
<!-- tocstop -->

# VIM
Vim, short for Vi IMproved, is a highly configurable text editor that is an extension of the original Vi editor distributed with UNIX systems. Vim is designed for use both from a command-line interface and as a standalone application in a graphical user interface. It is renowned for its efficiency, enabling experienced users to perform text editing tasks with speed and precision that can seem almost magical to the uninitiated.

Vim is based on the principle that most text editing tasks can be accomplished with a few keystrokes, eliminating the need for mouse navigation and allowing the user to keep their hands on the keyboard. This efficiency is achieved through Vim's modal nature, which includes different modes for inserting text, navigating within a document, and executing commands.

The core modes are:
- **Normal Mode**: For navigating a document and executing editing commands.
- **Insert Mode**: For inserting text.
- **Visual Mode**: For selecting blocks of text.
- **Command-Line Mode**: For entering commands that can manipulate the text, save files, configure settings, and more.

In Vim, changing between modes is a fundamental aspect of its operation. Vim starts in "Normal Mode," but you can switch to other modes by using specific commands. Here's how you can change from one mode to another:

### From Normal Mode

- **To Insert Mode**: There are several commands to enter Insert Mode, each placing the cursor in a slightly different position:
  - `i` - Enter Insert Mode before the cursor.
  - `I` - Enter Insert Mode at the beginning of the line.
  - `a` - Enter Insert Mode after the cursor.
  - `A` - Enter Insert Mode at the end of the line.
  - `o` - Open a new line below the current line and enter Insert Mode.
  - `O` - Open a new line above the current line and enter Insert Mode.

- **To Visual Mode**: 
  - `v` - Enter Visual Mode. You can select text character by character.
  - `V` - Enter Visual Line Mode. You can select whole lines.
  - `Ctrl+v` or `^v` - Enter Visual Block Mode. You can select blocks of text.

- **To Command-Line Mode**: 
  - `:` - Enter Command-Line Mode to execute a command. For example, `:w` saves the file, and `:q` quits Vim.
  - `/` - Enter Search Mode to search forward through the document.
  - `?` - Enter Search Mode to search backward through the document.

### Basic Movement
- `h` - Move left
- `j` - Move down
- `k` - Move up
- `l` - Move right
- `w` - Jump forwards to the start of a word
- `b` - Jump backwards to the start of a word
- `0` - Jump to the start of the line
- `$` - Jump to the end of the line
- `G` - Go to the last line of the document
- `gg` - Go to the first line of the document

### Editing
- `x` - Cut (delete) the character under the cursor
- `r` - Replace the character under the cursor
- `cc` - Change (replace) an entire line
- `cw` - Change (replace) to the end of a word
- `ciw` - Change (replace) the entire word
- `dd` - Delete the current line
- `dw` - Delete the word
- `yy` - Yank (copy) the current line
- `yw` - Yank (copy) the word
- `p` - Paste the clipboard after the cursor
- `P` - Paste the clipboard before the cursor


### Exiting
- `:w` - Write (save) the file, but don't exit
- `:wq` or `:x` or `ZZ` - Write (save) and quit
- `:q` - Quit (fails if there are unsaved changes)
- `:q!` or `ZQ` - Quit and throw away unsaved changes

### Searching and Replacing
- `/pattern` - Search for pattern
- `?pattern` - Search backward for pattern
- `n` - Repeat search in the same direction
- `N` - Repeat search in the opposite direction
- `:%s/old/new/g` - Replace all old with new throughout file
- `:%s/old/new/gc` - Replace all old with new throughout file with confirmations

### Miscellaneous
- `u` - Undo the last operation
- `Ctrl+r` - Redo the last undo
- `.` - Repeat the last command

### Plugins

#### 1. **Vim-Plug**
- **Description**: A minimalist Vim plugin manager that can install, update, and manage your Vim plugins.
- **GitHub**: https://github.com/junegunn/vim-plug

```bash
#!/bin/bash

curl -fLo ~/.vim/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim

cat > ~/.vimrc << EOF
" Set basic options
set number          " Show line numbers
set relativenumber  " Show relative line numbers
set tabstop=4       " Number of spaces tabs count for
set shiftwidth=4    " Number of spaces to use for autoindent
set expandtab       " Convert tabs to spaces

" Initialize plugin system
call plug#begin('~/.vim/plugged')

" List of plugins
Plug 'preservim/nerdtree'              " File system explorer
Plug 'junegunn/fzf', { 'do': { -> fzf#install() } }  " Fuzzy finder
Plug 'neoclide/coc.nvim', {'branch': 'release'}      " Intellisense engine
Plug 'tpope/vim-surround'              " Surround text with delimiters
Plug 'jiangmiao/auto-pairs'            " Automatically insert matching delimiters


" End of plugin list
call plug#end()

EOF

vim +PlugInstall +qall
```


#### 2. **NERDTree**
- **Description**: A file system explorer that allows you to browse your filesystem and to open files and directories.
- **GitHub**: https://github.com/preservim/nerdtree

#### 3. **YouCompleteMe**
- **Description**: A fast, as-you-type, fuzzy-search code completion engine for Vim. It provides super-fast, as-you-type suggestions for many programming languages.
- **GitHub**: https://github.com/ycm-core/YouCompleteMe

#### 4. **fzf (Fuzzy Finder)**
- **Description**: A general-purpose command-line fuzzy finder that integrates with Vim for powerful file searching, command history, and more.
- **GitHub**: https://github.com/junegunn/fzf
- **Vim Integration**: https://github.com/junegunn/fzf.vim

#### 5. **Coc.nvim (Conquer of Completion)**
- **Description**: Inspired by IntelliSense, coc.nvim is an intellisense engine for Vim8 & Neovim. It provides an extension ecosystem and is language server protocol (LSP) ready.
- **GitHub**: https://github.com/neoclide/coc.nvim

#### 6. **Vim-airline / lightline.vim**
- **Description**: These are two popular status line plugins. Vim-airline provides a highly configurable and stylish status line, while lightline.vim offers a more lightweight solution without external dependencies.
- **Vim-airline GitHub**: https://github.com/vim-airline/vim-airline
- **lightline.vim GitHub**: https://github.com/itchyny/lightline.vim

#### 7. **Vim-fugitive**
- **Description**: A Git wrapper that allows you to perform Git operations directly from Vim.
- **GitHub**: https://github.com/tpope/vim-fugitive

#### 8. **Vim-surround**
- **Description**: Provides mappings to easily delete, change, and add parentheses, brackets, quotes, XML tags, and more.
- **GitHub**: https://github.com/tpope/vim-surround

#### 9. **Vim-commentary**
- **Description**: A plugin for easy commenting of code. It allows you to use simple commands to comment out lines or blocks of code.
- **GitHub**: https://github.com/tpope/vim-commentary

#### 10. **ALE (Asynchronous Lint Engine)**
- **Description**: A plugin for providing linting (syntax checking and semantic errors) in real-time, leveraging Vim's asynchronous job control.
- **GitHub**: https://github.com/dense-analysis/ale
- 
