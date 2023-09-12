# **************************************************************************** #
#                                                                              #
#                                                         :::      ::::::::    #
#    Makefile                                           :+:      :+:    :+:    #
#                                                     +:+ +:+         +:+      #
#    By: mbernard <marvin@42.fr>                    +#+  +:+       +#+         #
#                                                 +#+#+#+#+#+   +#+            #
#    Created: 2023/09/06 23:14:40 by mbernard          #+#    #+#              #
#    Updated: 2023/09/12 21:26:30 by mbernard         ###   ########.fr        #
#                                                                              #
# **************************************************************************** #

NAME = social_nums
CC = cc
FLAGS = -Wall -Werror -Wextra
SRCS = social_num.c \
ft_atoi.c \
number.c \
string.c \
ft_cat_convert.c \
ft_split.c \
calculs.c \
dup.c
OBJS = $(SRCS:.c=.o)

all: $(NAME)

$(NAME): $(OBJS)
	$(CC) $(FLAGS) $(SRCS) header.h -o $@
clean:
	rm -f $(OBJS) *~
fclean:
	rm -f $(NAME)
mrproper: clean fclean
re: clean all
