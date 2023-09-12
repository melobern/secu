/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   dup.c                                              :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mbernard <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/12 21:21:18 by mbernard          #+#    #+#             */
/*   Updated: 2023/09/12 22:14:58 by mbernard         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "header.h"

void	dup_mun_birth(char *str)
{
	char	copy[15];

	ft_strncpy(copy, str, 11);
	copy[10] = copy[7];
	copy[11] = copy[8];
	copy[12] = copy[9];
	copy[13] = str[10];
	copy[14] = str[11];
	one_arg_num(copy);
}

void	dup_year(char *str, long long key)
{
	char	copy[15];
	int		x;

	x = 15;
	ft_strncpy(copy, str, 12);
	while (x-- > 2)
		copy[x] = str[x - 2];
	copy[1] = '0';
	copy[2] = '0';
	ft_year(copy, key);
}

void	dup_month(char *str, long long key)
{
	char	copy[15];
	int		x;

	x = 15;
	ft_strncpy(copy, str, 12);
	while (x-- > 4)
		copy[x] = str[x - 2];
	copy[3] = '0';
	copy[4] = '0';
	ft_month(copy, key);
}

void	dup_dep(char *str, long long key)
{
	char	copy[15];
	int		x;

	x = 15;
	ft_strncpy(copy, str, 12);
	while (x-- > 6)
		copy[x] = str[x - 2];
	copy[5] = '0';
	copy[6] = '0';
	ft_town(copy, key);
}
