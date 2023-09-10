/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   number.c                                           :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: mbernard <marvin@42.fr>                    +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/09/07 00:29:14 by mbernard          #+#    #+#             */
/*   Updated: 2023/09/10 10:58:23 by mbernard         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include "header.h"

int	int_len(long long num)
{
	int	len;

	len = 0;
	while (num / 10 > 0)
		len++;
	return (len);
}

void	ft_putnbr(long long nb)
{
	if (nb < 10)
		ft_putchar(nb + '0');
	else if (nb >= 10)
	{
		ft_putnbr(nb / 10);
		ft_putchar(nb % 10 + '0');
	}
}

char	*dup_mun_birth(char *str)
{
	char	copy[15];

	ft_strncpy(copy, str, 11);
	copy[10] = copy[7];
	copy[11] = copy[8];
	copy[12] = copy[9];
	copy[13] = str[10];
	copy[14] = str[11];
	return (ft_strdup(copy));
}
